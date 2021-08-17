import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';
import { Style } from '../types';

const Moon: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 27 24" style={style}>
        <Defs>
            <LinearGradient
                x1="81.7%"
                y1="-75.497%"
                x2="75.397%"
                y2="88.985%"
                id="prefix__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#8073FF" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fillRule="nonzero" fill="none">
            <Path
                d="M19.487 19.408c-.269-.536-.671-.805-1.208-.805-4.428-.134-7.917-3.623-7.917-8.051 0-2.147.805-4.294 2.415-5.77.805-.94.134-2.415-1.073-2.281C5.8 2.5.969 7.33.969 13.236c0 5.904 4.83 10.735 10.735 10.735 2.818 0 5.501-1.074 7.514-3.087.403-.402.537-.939.269-1.476z"
                fill="url(#prefix__a)"
            />
            <G fill="#9C92FF">
                <Path d="M21.166 11.202h-3.734a.933.933 0 01-.747-1.494l1.68-2.24h-1.867V5.6h3.734c.747 0 1.214.84.747 1.493l-1.68 2.24h1.867v1.868zM26.767 5.6h-3.734c-.747 0-1.214-.84-.747-1.493l1.68-2.24H22.1V0h3.734c.747 0 1.214.84.747 1.494l-1.68 2.24h1.867V5.6z" />
            </G>
        </G>
    </Svg>
);

export default Moon;
