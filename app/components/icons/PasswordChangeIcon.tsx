import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const PasswordChangeIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M12.75 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v6"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.25 6.375a.375.375 0 11-.002 0h.002zM11.25 6.375a.375.375 0 11-.002 0h.002zM17.25 6.375a.375.375 0 11-.002 0h.002z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.75 15.75h6a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5zM18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.75 19.154a.375.375 0 110 .75.375.375 0 010-.75z"></Path>
      </Svg>
    </View>
  );
};

export default PasswordChangeIcon;
