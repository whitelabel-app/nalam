import React, { useState } from 'react';
import ActivityPageDetails from '../../../components/ActivityPageDetails';
import { ScrollView, Alert } from 'react-native';
import Details from './details';
import { Modal, ButtonIcon } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { getCurrentUserUid } from '../../../redux/services/auth';
import { AddIcon, ContentHeader, ContentHeaderLabel } from './styled';
import BloodSugarChart from '../../../components/BloodSugarChart';
import NativeModal from 'react-native-modal';
import BloodSugarForm from './bloodSugarForm';
import {
    getFormattedDate,
    isEqualDate,
    getRelativeDateLabel,
    getDateWithCurrentTime,
} from '../../../helpers';
import {
    createAddDocAction,
    useCollection,
    createSetDocAction,
} from 'rainbow-firebase-hooks';
import { useIntl } from 'react-intl';
import BloodSugarList from '../../../components/BloodSugarList';

const userBloodSugarPathFn = (dateTime: Date, uid?: string) =>
    `users/${uid || getCurrentUserUid()}/history/${getFormattedDate(
        dateTime,
    )}/bloodSugar`;

const itemBloodSugarPathFn = (dateTimepath, bloodSugarId) =>
    `${userBloodSugarPathFn(dateTimepath)}/${bloodSugarId}`;

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

export default function BloodSugarDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { date, uid },
        },
    } = navigation;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedBloodSugar, setSelectedBloodSugar] = useState<any>();
    const intl = useIntl();
    const isCurrentLoggedUser = uid === getCurrentUserUid();

    const [addBloodSugar] = createAddDocAction({
        path: userBloodSugarPathFn,
    });

    const [bloodSugarCollection] = useCollection({
        path: userBloodSugarPathFn(date, uid),
        query: ref =>
            ref.where('enabled', '==', true).orderBy('dateTime', 'desc'),
    });

    const [setItemBloodSugar] = createSetDocAction({
        path: itemBloodSugarPathFn,
    });

    const deleteSelectedBloodSugar = () => {
        const currentData = {
            ...selectedBloodSugar.data,
            enabled: false,
        };
        const currentId = selectedBloodSugar.id;
        if (currentData && currentId) {
            setItemBloodSugar(
                currentData,
                currentData.dateTime.toDate(),
                currentId,
            );
        }
    };

    const editSelectedBloodSugar = values => {
        const selectedBloodSugarDate = selectedBloodSugar.data.dateTime.toDate();
        const newValueDate = values.dateTime;

        const currentData = {
            ...selectedBloodSugar.data,
            ...values,
        };
        const currentId = selectedBloodSugar.id;
        if (currentData && currentId) {
            setItemBloodSugar(currentData, values.dateTime, currentId);
        }
        if (!isEqualDate(selectedBloodSugarDate, newValueDate)) {
            deleteSelectedBloodSugar();
        }
    };

    return (
        <ActivityPageDetails
            onBack={() => goBack()}
            topHeaderTitle="Blood Sugar"
            isCenter={!isCurrentLoggedUser}
            topHeaderRightContent={
                <RenderIf isTrue={isCurrentLoggedUser}>
                    <ButtonIcon
                        icon={<AddIcon />}
                        onPress={() => setIsOpenModal(true)}
                    />
                </RenderIf>
            }
            headerBody={<BloodSugarChart data={bloodSugarCollection} />}>
            <ScrollView>
                <ContentHeader>
                    <ContentHeaderLabel>
                        {getRelativeDateLabel(date, intl)}
                    </ContentHeaderLabel>
                </ContentHeader>
                <BloodSugarList
                    list={bloodSugarCollection}
                    onSelect={currentBloodSugar => {
                        setSelectedBloodSugar(currentBloodSugar);
                        setIsOpenDetails(true);
                    }}
                />
            </ScrollView>
            <Modal
                title="Enter Blood Sugar"
                isOpen={isOpenModal}
                onRequestClose={() => {
                    setIsOpenModal(false);
                    setIsEditMode(false);
                }}>
                <BloodSugarForm
                    onSubmit={values => {
                        if (selectedBloodSugar) {
                            editSelectedBloodSugar(values);
                            setSelectedBloodSugar(undefined);
                        } else {
                            addBloodSugar(
                                { ...values, enabled: true },
                                values.dateTime,
                            );
                        }
                        setIsOpenModal(false);
                        setIsEditMode(false);
                    }}
                    dateTime={
                        selectedBloodSugar?.data?.dateTime?.toDate() ||
                        getDateWithCurrentTime(date)
                    }
                    mealTime={selectedBloodSugar?.data?.mealTime}
                    bloodSugar={selectedBloodSugar?.data?.bloodSugar}
                />
            </Modal>
            <NativeModal
                isVisible={isOpenDetails}
                // TODO: remove inline styles
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                swipeDirection="down"
                onBackdropPress={() => {
                    setIsOpenDetails(false);
                    setSelectedBloodSugar(undefined);
                }}
                onSwipeComplete={() => {
                    setIsOpenDetails(false);
                    setSelectedBloodSugar(undefined);
                }}
                onModalHide={() => {
                    if (isEditMode) {
                        setIsOpenModal(true);
                    }
                }}>
                <Details
                    isCurrentLoggedUser={isCurrentLoggedUser}
                    bloodSugar={selectedBloodSugar}
                    onRemove={() => {
                        showRequirePermissionAlert(
                            () => {
                                deleteSelectedBloodSugar();
                                setIsOpenDetails(false);
                            },
                            () => {
                                setIsOpenDetails(false);
                            },
                        );
                        setSelectedBloodSugar(undefined);
                    }}
                    onEdit={() => {
                        setIsEditMode(true);
                        setIsOpenDetails(false);
                    }}
                />
            </NativeModal>
        </ActivityPageDetails>
    );
}
