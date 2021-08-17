import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Style } from '../types';

const Excercise: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 16 29" style={style}>
        <G fillRule="nonzero" fill="none">
            <G fill="#F2BB80">
                <Path d="M8.082 4.697l.586-1.375a1.993 1.993 0 013.666 1.561l-.586 1.375a1.993 1.993 0 01-3.666-1.561zM1.536 26.897l2.535.03 1.534-5.51H2.692z" />
            </G>
            <G fill="#F7690B">
                <Path d="M.042 28.241c0 .358.29.648.647.648h2.84l.547-1.963-2.54-.03-1.205.802a.653.653 0 00-.29.543zM11.498 26.897H8.953l.552 1.992h2.84c.357 0 .647-.29.647-.648a.653.653 0 00-.289-.543l-1.205-.801z" />
            </G>
            <G fill="#F2BB80">
                <Path d="M10.282 21.418H7.428l1.525 5.479h2.545zM3.658 4.164L8.01 1.738 7.04 0 2.448 2.49a2.36 2.36 0 00-1.166 1.495 2.395 2.395 0 00.299 1.843l1.225 2.31 2.147-1.623-1.295-2.351z" />
            </G>
            <Path
                fill="#666"
                d="M9.505 17.931l-5.977-.498-.836 3.985h2.913l.414-1.495h.996l.413 1.495h2.854z"
            />
            <Path
                fill="#F7690B"
                d="M6.019 8.467L4.953 6.525 2.806 8.149l1.22 2.31v3.487l-.498 3.487 5.977.498L11 9.464z"
            />
            <Path
                d="M4.933 17.548a23.395 23.395 0 01-1.903 2.201l-.338 1.669h2.913l.414-1.495h.996l.413 1.495h2.854l-.777-3.487-4.572-.383z"
                fill="#595959"
            />
            <G fill="#E25D04">
                <Path d="M9.505 17.931L11 9.464l-1.385-.28a38.198 38.198 0 01-4.682 8.364l4.572.383z" />
                <Path d="M11 9.464l-.419 2.37 1.46 1.056 1.325-1.768z" />
            </G>
            <Path
                d="M15.099 12.333l-1.733-1.21-1.325 1.767 1.45 1.056-3.562 1.584-.423 2.401 5.155-1.992a2.062 2.062 0 00.438-3.616v.01z"
                fill="#F2BB80"
            />
        </G>
    </Svg>
);

export default Excercise;