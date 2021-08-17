import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Path,
    G,
    Defs,
    LinearGradient,
    Stop,
    Use,
} from 'react-native-svg';
import { Style } from '../types';

const CommunityFilled: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 20 17" style={style}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
                <Stop stopColor="#02E8D6" stopOpacity={0.39} offset="0%" />
                <Stop stopColor="#00B3B5" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
                <Stop stopColor="#02E8D6" stopOpacity={0.39} offset="0%" />
                <Stop stopColor="#00B3B5" offset="100%" />
            </LinearGradient>
            <Path
                d="M4.85 13.815c1.529-2.792 4.05-4.532 7.304-4.532 3.097 0 5.775 2 7.311 4.532 0 0-2.436 2.8-7.311 2.8-4.868 0-7.304-2.753-7.304-2.8z"
                id="prefix__a"
            />
            <Path
                d="M0 11.903c.994-1.815 2.632-2.946 4.747-2.946 1.068 0 2.146.354 2.99.942-2.815 1.573-3.217 3.451-3.576 3.793C1.49 13.446 0 11.931 0 11.902z"
                id="prefix__c"
            />
        </Defs>
        <G fillRule="nonzero" fill="none">
            <Path
                d="M12.153 7.477a3.742 3.742 0 01-3.738-3.739A3.742 3.742 0 0112.153 0a3.742 3.742 0 013.739 3.738 3.742 3.742 0 01-3.739 3.739z"
                fill="#F5D4BB"
            />
            <G>
                <Use fill="#00D8C7" xlinkHref="#prefix__a" />
                <Use fill="url(#prefix__b)" xlinkHref="#prefix__a" />
            </G>
            <Path
                d="M4.747 7.783c-1.34 0-2.43-1.09-2.43-2.43s1.09-2.43 2.43-2.43 2.43 1.09 2.43 2.43-1.09 2.43-2.43 2.43z"
                fill="#F5D4BB"
            />
            <G>
                <Use fill="#00D8C7" xlinkHref="#prefix__c" />
                <Use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
            </G>
        </G>
    </Svg>
);

CommunityFilled.propTypes = {
    style: PropTypes.object,
};

CommunityFilled.defaultProps = {
    style: undefined,
};

export default CommunityFilled;
