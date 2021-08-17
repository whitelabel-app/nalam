import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './home';
import LoginScreen from './login';
import VerifyCodeScreen from './verify-code';
import PrivacyPolicyScreen from './privacyPolicy';
import TermsAndConditionsScreen from './termsAndConditions';

const AuthStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
        VerifyCode: VerifyCodeScreen,
        PrivacyPolicy: PrivacyPolicyScreen,
        TermsAndConditions: TermsAndConditionsScreen,
    },
    {
        initialRouteName: 'Home',
    },
);

export default AuthStack;
