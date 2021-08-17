import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { Style } from '../types';

const Distance: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 26 28" style={style}>
        <G fillRule="nonzero" fill="none">
            <Path
                d="M22.273 26.41H7.159a.796.796 0 010-1.592h15.114a1.591 1.591 0 000-3.182h-7.955a3.185 3.185 0 01-3.182-3.181 3.185 3.185 0 013.182-3.182h2.387a.796.796 0 010 1.59h-2.387a1.593 1.593 0 000 3.182h7.955a3.185 3.185 0 013.182 3.182 3.185 3.185 0 01-3.182 3.182z"
                fill="#CFD8DC"
            />
            <G transform="translate(3.182 13.682)" fill="#B0BEC5">
                <Circle cx={2.386} cy={11.932} r={2.386} />
                <Circle cx={15.114} cy={2.386} r={2.386} />
            </G>
            <Path
                d="M5.568 7.318A5.574 5.574 0 000 12.886c0 2.858 4.467 7.918 4.976 8.486a.8.8 0 00.592.264.8.8 0 00.592-.264c.51-.568 4.976-5.628 4.976-8.486a5.574 5.574 0 00-5.568-5.568z"
                fill="#2196F3"
            />
            <G transform="translate(0 7.318)">
                <Path
                    d="M5.568 0A5.574 5.574 0 000 5.568c0 2.857 4.467 7.918 4.976 8.486a.8.8 0 00.592.264.8.8 0 00.592-.264c.51-.568 4.976-5.629 4.976-8.486A5.574 5.574 0 005.568 0z"
                    fill="#EB232E"
                />
                <Circle fill="#FAFAFA" cx={5.568} cy={5.568} r={2.386} />
            </G>
            <G transform="translate(13.576)">
                <Path
                    d="M4.586 0A4.59 4.59 0 000 4.586c0 2.353 3.679 6.52 4.098 6.988a.658.658 0 00.975 0c.42-.468 4.098-4.635 4.098-6.988A4.59 4.59 0 004.586 0z"
                    fill="#DD0612"
                />
                <Circle fill="#FAFAFA" cx={4.586} cy={4.586} r={1.965} />
            </G>
        </G>
    </Svg>
);

export default Distance;
