import { Linking } from 'react-native';

export default async function openAppUrl(url) {
    try {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            Linking.openURL(url);
        }
    } catch (error) {
        console.log(error);
    }
}
