import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { Style } from '../types';

const FaceNeutral: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 14 14" style={style}>
        <G fillRule="nonzero" fill="none">
            <Circle fill="#FFE17D" cx={7} cy={7} r={7} />
            <Path
                d="M14 7a7 7 0 01-12.45 4.395c1.202.97 2.73 1.55 4.396 1.55a7 7 0 007-7c0-1.664-.58-3.193-1.551-4.394A6.992 6.992 0 0114 7z"
                fill="#FFD164"
            />
            <G transform="translate(3.719 4.594)" fill="#7D5046">
                <Path d="M6.414 4.823c0 .21-.17.381-.38.381H.528a.382.382 0 01-.38-.38c0-.211.172-.381.38-.381h5.504c.211 0 .38.17.38.38z" />
                <Circle cx={1.053} cy={1.069} r={1.043} />
            </G>
            <Circle
                fill="#9C6846"
                transform="rotate(-126.653 5.214 5.236)"
                cx={5.214}
                cy={5.236}
                r={1}
            />
            <Circle fill="#7D5046" cx={9.227} cy={5.663} r={1.043} />
            <Circle
                fill="#9C6846"
                transform="rotate(-126.657 9.668 5.238)"
                cx={9.668}
                cy={5.238}
                r={1}
            />
        </G>
    </Svg>
);

export default FaceNeutral;
