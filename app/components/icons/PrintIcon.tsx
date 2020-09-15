import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const PrintIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M5.7 16.9H2.9a1.4 1.4 0 01-1.4-1.4v-7a1.4 1.4 0 011.4-1.4h18.2a1.4 1.4 0 011.4 1.4v7a1.4 1.4 0 01-1.4 1.4h-2.8"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.7 14.5h12.6v8H5.7v-8zM18.3 7.1H5.7V2.9a1.4 1.4 0 011.4-1.4h9.8a1.4 1.4 0 011.4 1.4v4.2zM6 11h2"></Path>
      </Svg>
    </View>
  );
};

export default PrintIcon;
