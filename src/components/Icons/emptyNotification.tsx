import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { Style } from '../types';

const EmptyNotification: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 63 54" style={style}>
        <G transform="translate(0 -1)" fill="none" fillRule="evenodd">
            <G fillRule="nonzero">
                <Path
                    d="M31.521 49.565a6.373 6.373 0 11-12.368-3.083 6.373 6.373 0 0112.368 3.083z"
                    fill="#DEB247"
                />
                <Path
                    d="M35.447 10.857a2.429 2.429 0 01-1.768-2.943l1.174-4.712a2.43 2.43 0 014.712 1.175L38.39 9.089a2.429 2.429 0 01-2.943 1.768z"
                    fill="#EECF7A"
                />
                <Path
                    d="M49.959 46.785a16.257 16.257 0 01-2.595-13.469L49 26.748c2.268-9.094-3.288-18.336-12.379-20.602C27.53 3.879 18.286 9.43 16.019 18.525l-1.638 6.568a16.281 16.281 0 01-8.64 10.69 4.237 4.237 0 00-2.223 2.771 4.254 4.254 0 003.095 5.151l38.872 9.692a4.254 4.254 0 005.15-3.095c.301-1.206.06-2.48-.676-3.517z"
                    fill="#E5C46B"
                />
                <Path
                    d="M60.786 23.215a1.059 1.059 0 10-1.797 1.123 10.084 10.084 0 011.278 7.665 10.086 10.086 0 01-4.509 6.33 1.059 1.059 0 101.123 1.796 12.189 12.189 0 005.451-7.649 12.19 12.19 0 00-1.546-9.265zm-4.824 1.062a1.059 1.059 0 10-1.797 1.123c2.032 3.25 1.04 7.547-2.211 9.578a1.059 1.059 0 101.123 1.798c4.24-2.65 5.535-8.258 2.885-12.5zM7.287 10.864a1.059 1.059 0 00-1.46-.337 12.19 12.19 0 00-5.451 7.65 12.189 12.189 0 001.546 9.264 1.057 1.057 0 001.46.337c.497-.31.647-.963.337-1.46a10.086 10.086 0 01-1.278-7.665 10.086 10.086 0 014.509-6.329c.497-.31.647-.963.337-1.46zm3.87 3.069a1.059 1.059 0 00-1.46-.337c-4.241 2.649-5.536 8.257-2.885 12.498a1.057 1.057 0 001.46.337c.497-.31.647-.963.337-1.46-2.032-3.25-1.04-7.547 2.211-9.578.497-.31.648-.963.337-1.46z"
                    fillOpacity={0.11}
                    fill="#000"
                />
            </G>
            <Circle fill="#DF5257" cx={51.444} cy={12.722} r={11.111} />
            <Path
                d="M51.419 17.583c.482 0 .935-.097 1.358-.292.423-.195.789-.491 1.099-.89.31-.398.554-.902.734-1.51.18-.61.269-1.33.269-2.162 0-.832-.09-1.554-.27-2.165-.179-.611-.423-1.117-.733-1.517-.31-.401-.676-.699-1.1-.894a3.206 3.206 0 00-1.357-.292c-.487 0-.94.098-1.358.292a2.952 2.952 0 00-1.093.894c-.31.4-.553.906-.73 1.517-.177.61-.266 1.333-.266 2.165 0 .832.089 1.553.266 2.161.177.61.42 1.113.73 1.511.31.399.674.695 1.093.89.418.195.87.292 1.358.292zm0-.996c-.292 0-.573-.065-.844-.196-.27-.13-.506-.346-.71-.647-.204-.301-.366-.697-.488-1.189-.122-.491-.183-1.1-.183-1.826s.061-1.336.183-1.83c.122-.493.284-.89.488-1.192.204-.3.44-.517.71-.647a1.915 1.915 0 011.687 0c.27.13.508.346.714.647.206.301.37.699.492 1.192.121.494.182 1.104.182 1.83s-.06 1.335-.182 1.826c-.122.492-.286.888-.492 1.189-.206.3-.444.517-.714.647-.27.13-.551.196-.843.196z"
                fill="#FFF"
                fillRule="nonzero"
            />
        </G>
    </Svg>
);

export default EmptyNotification;