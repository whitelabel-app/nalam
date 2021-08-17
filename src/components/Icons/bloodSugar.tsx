import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { Style } from '../types';

const BloodSugar: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 29 32" style={style}>
        <G fill="none" fillRule="evenodd">
            <G transform="translate(19.241 13.293)" fill="#F55">
                <Path
                    d="M4.95 11.852l.621 2.18.81-1.538.224.575h2.597c.063.285.095.535.095.747a4.454 4.454 0 01-4.452 4.447 4.454 4.454 0 01-4.452-4.447c0-.269.051-.597.153-.983h2.4l.097-.238.954 3.574.953-4.317zM4.845 4.42s1.374 2.178 2.38 4.049c.83 1.542 1.413 2.808 1.745 3.788H7.16l-.668-1.713-.695 1.32-.947-3.321-.928 4.201-.72-2.7-.802 1.978H.803c.342-.945.897-2.132 1.662-3.553 1.006-1.871 2.38-4.05 2.38-4.05z"
                    fillRule="nonzero"
                />
                <Circle cx={4.856} cy={1} r={1} />
            </G>
            <G fillRule="nonzero">
                <Path
                    d="M.25 7.53h2.867L7.827 5 11.17.5a3.274 3.274 0 011.627 4.4l-1.35 2.835h10.986a1.706 1.706 0 110 3.413h-5.849v3.072h-.755v2.935h-1.511v2.867H6.537L2.23 18.179H.25V7.53z"
                    fill="#F7E0BA"
                />
                <Path
                    fill="#F5CC89"
                    d="M6.956 17.974L2.65 16.131H.25v2.048h1.98l4.307 1.843h7.782v-2.048z"
                />
            </G>
        </G>
    </Svg>
);

export default BloodSugar;
