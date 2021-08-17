import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { ButtonIcon } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { registerFitbitDevice } from '../../redux/actions/devices';
import { logout } from '../../redux/actions/auth';
import {
    HomeContainer,
    HeaderContainer,
    Header,
    DeviceLogoIcon,
    ChevronRightIcon,
    CardDeviceItem,
    Skip,
    ArrowLeftIcon,
    Title,
} from './styled';

export default function RegisterDevice({ navigation }) {
    const {
        navigate,
        goBack: navigateBack,
        state: { params },
    } = navigation;
    const goBack = params?.goBack;
    const dispatch = useDispatch();

    const handleBackButton = () => {
        if (goBack) {
            return navigateBack();
        }
        return logout();
    };

    return (
        <HomeContainer>
            <HeaderContainer>
                <Header>
                    <ButtonIcon
                        icon={<ArrowLeftIcon />}
                        onPress={handleBackButton}
                    />
                    <RenderIf isTrue={!goBack}>
                        <TouchableOpacity onPress={() => navigate('Dashboard')}>
                            <Skip>Skip</Skip>
                        </TouchableOpacity>
                    </RenderIf>
                </Header>
                <Title>Register Device</Title>
            </HeaderContainer>
            <CardDeviceItem
                label="fitbit"
                description="Connect your device"
                icon={<DeviceLogoIcon />}
                action={<ChevronRightIcon />}
                onPress={() => dispatch(registerFitbitDevice(navigation))}
            />
        </HomeContainer>
    );
}

RegisterDevice.navigationOptions = {
    header: null,
};
