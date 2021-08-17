import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Use,
} from 'react-native-svg';
import { Style } from '../types';

const DashboardFilled: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 20 20" style={style}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
                <Stop stopColor="#02E8D6" stopOpacity={0.39} offset="0%" />
                <Stop stopColor="#00B3B5" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
                <Stop stopColor="#304058" stopOpacity={0.2} offset="0%" />
                <Stop stopColor="#576574" stopOpacity={0.548} offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__f">
                <Stop stopColor="#02E8D6" stopOpacity={0.39} offset="0%" />
                <Stop stopColor="#00B3B5" offset="100%" />
            </LinearGradient>
            <Path
                d="M8.828 13.75H.781a.781.781 0 00-.781.781v4.688c0 .431.35.781.781.781h8.047c.432 0 .781-.35.781-.781V14.53a.781.781 0 00-.78-.781z"
                id="prefix__a"
            />
            <Path
                d="M8.828 0H.781A.781.781 0 000 .781v11.094c0 .431.35.787.781.787h8.047a.787.787 0 00.781-.787V.781A.781.781 0 008.83 0z"
                id="prefix__c"
            />
            <Path
                d="M19.219 7.35h-8.047a.776.776 0 00-.781.775v11.094c0 .431.35.781.78.781h8.048c.431 0 .781-.35.781-.781V8.125a.776.776 0 00-.781-.775z"
                id="prefix__e"
            />
        </Defs>
        <G fillRule="nonzero" fill="none">
            <Use fill="#00D8C7" xlinkHref="#prefix__a" />
            <Use fill="url(#prefix__b)" xlinkHref="#prefix__a" />
            <Use fill="#00D8C7" xlinkHref="#prefix__c" />
            <Use
                fillOpacity={0.2}
                fill="url(#prefix__d)"
                xlinkHref="#prefix__c"
            />
            <Path
                d="M19.219 0h-8.047a.781.781 0 00-.781.781V5.47c0 .431.35.781.78.781h8.048c.431 0 .781-.35.781-.781V.78A.781.781 0 0019.219 0z"
                fill="#00D8C7"
            />
            <G>
                <Use fill="#00D8C7" xlinkHref="#prefix__e" />
                <Use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
            </G>
        </G>
    </Svg>
);

DashboardFilled.propTypes = {
    style: PropTypes.object,
};

DashboardFilled.defaultProps = {
    style: undefined,
};

export default DashboardFilled;
