import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const BackspaceIcon: FC<IconProps> = ({color, height, width}) => {
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
          strokeWidth="1.5"
          d="M6.482 3.88A2 2 0 018.14 3H21a2 2 0 012 2v14a2 2 0 01-2 2H8.14a2 2 0 01-1.658-.88l-4.726-7a2 2 0 010-2.24l4.726-7z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.253 8l-8 8M10.253 8l8 8"></Path>
      </Svg>
    </View>
  );
};

export default BackspaceIcon;
