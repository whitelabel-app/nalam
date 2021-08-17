import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RegisterDevice from './registerDevice';
import GroupDetails from './groupDetails';
import Notifications from './notifications';
import InviteMember from './inviteMember';
import MemberDetails from './memberDetails';
import Dashboard from './dashboard';
import Community from './community';
import Profile from './profile';
import WeeklySummary from './weeklySummary';
import WeeklyCategoryDetails from './weeklyCategoryDetails';
import GroupSettings from './groupSettings';
import BloodSugarDetails from './bloodSugarDetails';
import BloodPressureDetails from './bloodPressureDetails';
import StepsDetails from './stepsDetails';
import ActiveTimeDetails from './activeTimeDetails';
import WeeklyBloodPressureDetails from './weeklyBloodPressureDetails';
import WeeklyBloodSugarDetails from './weeklyBloodSugarDetails';
import WeightDetails from './weightDetails';

import {
    COLOR_GRAY_3,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_DARK_1,
    COLOR_WHITE,
} from '../../styles/colors';

const bottomTabNavigator = createBottomTabNavigator(
    {
        DASHBOARD: { screen: Dashboard },
        COMMUNITY: { screen: Community },
        PROFILE: { screen: Profile },
    },
    {
        initialRouteName: 'DASHBOARD',
        tabBarOptions: {
            allowFontScaling: false,
            activeTintColor: COLOR_DARK_1,
            inactiveTintColor: COLOR_GRAY_3,
            labelStyle: {
                fontSize: 12,
                lineHeight: 14,
            },
            tabStyle: {
                width: 100,
                alignSelf: 'center',
            },
            style: {
                backgroundColor: COLOR_WHITE,
                borderTopWidth: 1,
                borderTopColor: COLOR_GRAY_TRANSPARENT_2,
                height: 72,
                paddingVertical: 4,
            },
            showIcon: true,
        },
    },
);

export default createStackNavigator(
    {
        RegisterDevice,
        Dashboard: bottomTabNavigator,
        GroupDetails,
        Notifications,
        InviteMember,
        MemberDetails,
        WeeklySummary,
        WeeklyCategoryDetails,
        GroupSettings,
        BloodSugarDetails,
        BloodPressureDetails,
        StepsDetails,
        ActiveTimeDetails,
        WeeklyBloodPressureDetails,
        WeeklyBloodSugarDetails,
        WeightDetails,
    },
    {
        initialRouteName: 'Dashboard',
        headerMode: 'none',
    },
);
