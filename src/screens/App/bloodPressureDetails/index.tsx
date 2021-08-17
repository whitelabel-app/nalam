import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { ScrollView, Alert } from 'react-native';
import { Modal, ButtonIcon } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import {
    createAddDocAction,
    useCollection,
    createSetDocAction,
} from 'rainbow-firebase-hooks';
import ActivityPageDetails from '../../../components/ActivityPageDetails';
import BloodPressureForm from './bloodPressureForm';
import { AddIcon, SectionHeader, Label } from './styled';
import NativeModal from 'react-native-modal';
import Details from './details';
import { getCurrentUserUid } from '../../../redux/services/auth';
import {
    getFormattedDate,
    isEqualDate,
    getRelativeDateLabel,
    getDateWithCurrentTime,
} from '../../../helpers';
import BloodPressureList from '../../../components/BloodPressureList';

const userBloodPressurePathFn = (dateTime: Date, uid?: string) =>
    `users/${uid || getCurrentUserUid()}/history/${getFormattedDate(
        dateTime,
    )}/bloodPressure`;

const itemBloodPressurePathFn = (dateTimepath, bloodPressureId) =>
    `${userBloodPressurePathFn(dateTimepath)}/${bloodPressureId}`;

const showRequirePermissionAlert = (onAccept, onCancel) => {
    Alert.alert(
        'Are you sure you want delete this data?',
        'This data will be deleted immediately. You can’t undo this action.',
        [
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => onCancel(),
            },
            { text: 'OK', onPress: () => onAccept() },
        ],
        { cancelable: false },
    );
};
export default function BloodPressureDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { date, uid },
        },
    } = navigation;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedBloodPressure, setSelectedBloodPressure] = useState<any>();
    const intl = useIntl();
    const isCurrentLoggedUser = uid === getCurrentUserUid();

    const [addBloodPressure] = createAddDocAction({
        path: userBloodPressurePathFn,
    });

    const [bloodPressures] = useCollection({
        path: userBloodPressurePathFn(date, uid),
        query: ref =>
            ref.where('enabled', '==', true).orderBy('dateTime', 'desc'),
    });

    const [setItemBloodPressure] = createSetDocAction({
        path: itemBloodPressurePathFn,
    });

    const deleteSelectedBloodPressure = () => {
        const currentData = {
            ...selectedBloodPressure.data,
            enabled: false,
        };
        const currentId = selectedBloodPressure.id;
        if (currentData && currentId) {
            setItemBloodPressure(
                currentData,
                currentData.dateTime.toDate(),
                currentId,
            );
        }
    };

    const editSelectedBloodPressure = values => {
        const selectedBloodPressureDate = selectedBloodPressure.data.dateTime.toDate();
        const newValueDate = values.dateTime;

        const currentData = {
            ...selectedBloodPressure.data,
            ...values,
        };
        const currentId = selectedBloodPressure.id;
        if (currentData && currentId) {
            setItemBloodPressure(currentData, values.dateTime, currentId);
        }
        if (!isEqualDate(selectedBloodPressureDate, newValueDate)) {
            deleteSelectedBloodPressure();
        }
    };

    return (
        <ActivityPageDetails
            onBack={() => goBack()}
            topHeaderTitle="Blood Pressure"
            isCenter={!isCurrentLoggedUser}
            topHeaderRightContent={
                <RenderIf isTrue={isCurrentLoggedUser}>
                    <ButtonIcon
                        icon={<AddIcon />}
                        onPress={() => setIsOpenModal(true)}
                    />
                </RenderIf>
            }>
            <SectionHeader>
                <Label>{getRelativeDateLabel(date, intl)}</Label>
            </SectionHeader>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 20,
                    flexGrow: 1,
                    alignItems: 'center',
                }}>
                <BloodPressureList
                    list={bloodPressures}
                    onSelect={currentBloodPressure => {
                        setSelectedBloodPressure(currentBloodPressure);
                        setIsOpenDetail(true);
                    }}
                />
            </ScrollView>
            <Modal
                title="Enter Blood Pressure"
                isOpen={isOpenModal}
                onRequestClose={() => {
                    setIsOpenModal(false);
                    setIsEditMode(false);
                }}>
                <BloodPressureForm
                    onSubmit={values => {
                        if (selectedBloodPressure) {
                            editSelectedBloodPressure(values);
                            setSelectedBloodPressure(undefined);
                        } else {
                            addBloodPressure(
                                { ...values, enabled: true },
                                values.dateTime,
                            );
                        }
                        setIsOpenModal(false);
                        setIsEditMode(false);
                    }}
                    dateTime={
                        selectedBloodPressure?.data?.dateTime?.toDate() ||
                        getDateWithCurrentTime(date)
                    }
                    pressure={
                        selectedBloodPressure &&
                        selectedBloodPressure.data && {
                            sys: selectedBloodPressure.data.sys,
                            dia: selectedBloodPressure.data.dia,
                        }
                    }
                    heartRate={selectedBloodPressure?.data?.heartRate}
                />
            </Modal>
            <NativeModal
                isVisible={isOpenDetail}
                // TODO: remove inline styles
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                swipeDirection="down"
                onBackdropPress={() => {
                    setIsOpenDetail(false);
                    setSelectedBloodPressure(undefined);
                }}
                onSwipeComplete={() => {
                    setIsOpenDetail(false);
                    setSelectedBloodPressure(undefined);
                }}
                onModalHide={() => {
                    if (isEditMode) {
                        setIsOpenModal(true);
                    }
                }}>
                <Details
                    bloodPressure={selectedBloodPressure}
                    isCurrentLoggedUser={isCurrentLoggedUser}
                    onRemove={() => {
                        showRequirePermissionAlert(
                            () => {
                                deleteSelectedBloodPressure();
                                setIsOpenDetail(false);
                            },
                            () => {
                                setIsOpenDetail(false);
                            },
                        );
                        setSelectedBloodPressure(undefined);
                    }}
                    onEdit={() => {
                        setIsEditMode(true);
                        setIsOpenDetail(false);
                    }}
                />
            </NativeModal>
        </ActivityPageDetails>
    );
}
