import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const BellBorder: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 20 20" style={style}>
        <Path
            d="M10.232 1.355a1.827 1.827 0 013.53.946l-.278 1.036a5.727 5.727 0 012.363 6.25l-.845 3.16a7.275 7.275 0 00.722 5.517c.226.38.196.862-.078 1.212a1.088 1.088 0 01-1.149.39l-4.509-1.208a2.474 2.474 0 01-4.671-1.25L.807 16.2A1.09 1.09 0 010 15.137c0-.388.209-.749.546-.94a7.323 7.323 0 003.392-4.415l.844-3.158a5.711 5.711 0 015.172-4.232zM6.378 17.693a1.423 1.423 0 002.552.683zm4.017-14.258h-.085a4.666 4.666 0 00-4.507 3.463l-.845 3.16a8.383 8.383 0 01-3.884 5.053c-.014.008-.02.016-.02.026 0 .025.011.04.03.046v-.001l13.688 3.666c.015.004.029 0 .037-.011.012-.016.013-.03.006-.04a8.348 8.348 0 01-.832-6.324l.845-3.158a4.673 4.673 0 00-2.195-5.27 4.757 4.757 0 00-.835-.36l-.108-.038a1.866 1.866 0 00-.162-.053 4.75 4.75 0 00-.964-.151l-.017-.001-.089-.005-.1-.003zm8.332 5.711A4.323 4.323 0 0120 12.224a4.323 4.323 0 01-1.273 3.077.498.498 0 11-.706-.705 3.33 3.33 0 00.98-2.372 3.33 3.33 0 00-.98-2.372.5.5 0 01.706-.706zm-1.675.729a3.255 3.255 0 010 4.598.496.496 0 01-.706 0 .499.499 0 010-.706 2.256 2.256 0 000-3.187.499.499 0 11.706-.705zM2.734 4.18a.499.499 0 01-.159.687 3.33 3.33 0 00-1.489 2.09 3.33 3.33 0 00.422 2.532.499.499 0 11-.846.53 4.323 4.323 0 01-.549-3.286 4.323 4.323 0 011.933-2.712.499.499 0 01.688.159zm1.33 1.054a.499.499 0 01-.16.688 2.256 2.256 0 00-.716 3.105.499.499 0 11-.846.529 3.255 3.255 0 011.034-4.48.499.499 0 01.688.158zm7.932-4.18a.77.77 0 00-.747.572l-.214.801a5.805 5.805 0 01.684.129l.011.003.015.002a.796.796 0 01.112.031 5.515 5.515 0 01.445.143l.032.012c.066.025.13.05.194.077l.214-.798a.773.773 0 00-.746-.972z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

BellBorder.propTypes = {
    style: PropTypes.object,
};

BellBorder.defaultProps = {
    style: undefined,
};

export default BellBorder;