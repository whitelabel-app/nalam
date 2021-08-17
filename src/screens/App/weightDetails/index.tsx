import React, { useState } from 'react';
import { Modal, ButtonIcon } from 'react-native-rainbow';
import NativeModal from 'react-native-modal';
import ActivityPageDetails from '../../../components/ActivityPageDetails';
import MoodOutput from '../../../components/MoodOutput';
import DailyItem from '../../../components/DailyItem';
import Details from './details';
import { ScrollView, Alert } from 'react-native';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { getCurrentUserUid } from '../../../redux/services/auth';
import { AddIcon, ContentHeader, ContentHeaderLabel } from './styled';
import { COLOR_BRAND } from '../../../styles/colors';
import WeightForm from './weightForm';
import { useIntl } from 'react-intl';
import {
    getRelativeDateLabel,
    getFormattedDay,
    getWeightMood,
} from '../../../helpers';
import useWeight from '../../../redux/services/hooks/useWeight';
import useUserProfile from '../../../redux/services/hooks/useUserProfile';
import getWeight from '../../../redux/services/firebase';
import { createSetDocAction, createAddDocAction } from 'rainbow-firebase-hooks';
import getFormattedDate from '../../../helpers/getFormattedDate';

const showRequireDeletePermissionAlert = (onAccept, onCancel) => {
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

const showRequireUpdatePermissionAlert = (onAccept, onCancel) => {
    Alert.alert(
        'Are you sure you want update this data?',
        'This data will be updated immediately. You can’t undo this action.',
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
const weightPathFn = (dateTime: string, uid: string) =>
    `users/${uid}/history/${dateTime}/weight`;

const itemWeightPathFn = (dateTime: string, uid: string, weightId: string) =>
    `${weightPathFn(dateTime, uid)}/${weightId}`;

const onSaveWeight = async (uid, date, onExistWeight, onDefault) => {
    const weight = await getWeight({ uid, date });
    if (weight?.id) {
        onExistWeight(weight);
    } else {
        onDefault();
    }
};
export default function WeightDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { uid, date },
        },
    } = navigation;
    const intl = useIntl();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [weight, setWeight] = useWeight(uid, date);
    const isCurrentLoggedUser = uid === getCurrentUserUid();
    const userProfile = useUserProfile(uid);
    const height = userProfile?.user?.height;
    const weightMood = getWeightMood(height, weight?.value);
    const [setItemWeight] = createSetDocAction({
        path: itemWeightPathFn,
    });
    const [addWeight] = createAddDocAction({
        path: weightPathFn,
    });
    return (
        <ActivityPageDetails
            onBack={() => goBack()}
            topHeaderTitle="Weight"
            headerColor={COLOR_BRAND}
            isCenter={!isCurrentLoggedUser}
            topHeaderRightContent={
                <RenderIf isTrue={isCurrentLoggedUser}>
                    <ButtonIcon
                        icon={<AddIcon />}
                        onPress={() => setIsOpenModal(true)}
                    />
                </RenderIf>
            }>
            <ContentHeader>
                <ContentHeaderLabel>
                    {getRelativeDateLabel(date, intl)}
                </ContentHeaderLabel>
            </ContentHeader>
            <ScrollView>
                <RenderIf isTrue={!!weight}>
                    <DailyItem
                        day={getFormattedDay(
                            weight?.dateTime?.toDate()?.getDay(),
                        )}
                        label={`${weight?.value} lbs`}
                        date={intl.formatTime(weight?.dateTime?.toDate())}
                        onPress={() => setIsOpenDetail(true)}
                        description={
                            <MoodOutput size="medium" label={weightMood} />
                        }
                    />
                </RenderIf>
            </ScrollView>
            <Modal
                title="Enter Weight"
                isOpen={isOpenModal}
                onRequestClose={() => {
                    setIsOpenModal(false);
                    setIsEditMode(false);
                }}>
                <WeightForm
                    onSubmit={values => {
                        if (!isEditMode) {
                            onSaveWeight(
                                uid,
                                values.dateTime,
                                existWeight => {
                                    showRequireUpdatePermissionAlert(
                                        () => {
                                            setItemWeight(
                                                {
                                                    ...existWeight?.data,
                                                    ...values,
                                                },
                                                getFormattedDate(
                                                    values.dateTime,
                                                ),
                                                uid,
                                                existWeight.id,
                                            );
                                            setIsOpenModal(false);
                                        },
                                        () => {
                                            setIsOpenModal(false);
                                        },
                                    );
                                },
                                () => {
                                    addWeight(
                                        {
                                            ...values,
                                            enabled: true,
                                        },
                                        getFormattedDate(values.dateTime),
                                        uid,
                                    );
                                    setIsOpenModal(false);
                                    setIsEditMode(false);
                                },
                            );
                        } else {
                            setWeight(values);
                            setIsOpenModal(false);
                            setIsEditMode(false);
                        }
                    }}
                    weight={isEditMode && weight?.value}
                    dateTime={isEditMode && weight?.dateTime?.toDate()}
                    editMode={isEditMode}
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
                }}
                onSwipeComplete={() => {
                    setIsOpenDetail(false);
                }}
                onModalHide={() => {
                    if (isEditMode) {
                        setIsOpenModal(true);
                    }
                }}>
                <Details
                    weight={weight}
                    isCurrentLoggedUser={isCurrentLoggedUser}
                    uid={uid}
                    onRemove={() => {
                        showRequireDeletePermissionAlert(
                            () => {
                                setWeight(undefined);
                                setIsOpenDetail(false);
                            },
                            () => {
                                setIsOpenDetail(false);
                            },
                        );
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
