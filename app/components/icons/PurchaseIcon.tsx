import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const PurchaseIcon: FC<IconProps> = ({color, height, width}) => {
  const widthSize = width ? width.toString() : '24';
  const heightSize = height ? height.toString() : '24';
  const strokeColor = color ? color : '#111';

  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        fill="none"
        viewBox="0 0 24 24">
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1.061 2.56v6.257a3 3 0 00.878 2.121L13.5 22.5a1.5 1.5 0 002.121 0l6.879-6.88a1.5 1.5 0 000-2.121L10.939 1.938a3 3 0 00-2.121-.878H2.561a1.5 1.5 0 00-1.5 1.5v0z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.811 6.31a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1.061 2.56v6.257a3 3 0 00.878 2.121L13.5 22.5a1.5 1.5 0 002.121 0l6.879-6.88a1.5 1.5 0 000-2.121L10.939 1.938a3 3 0 00-2.121-.878H2.561a1.5 1.5 0 00-1.5 1.5v0z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.811 6.31a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></Path>
      </Svg>
    </View>
  );
};

export default PurchaseIcon;
