import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const TextGivingIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M15.75 15l-1.673-1.255a1.568 1.568 0 00-2.196.315l-.05.07a1.566 1.566 0 000 1.74l1.644 2.467a4.504 4.504 0 002.073 1.682L18 21v2.25M15 9.75l3.6 1.541a4.5 4.5 0 012.363 2.364l1.173 2.745c.241.56.364 1.163.364 1.773v5.077"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 14.438V7.5a2.25 2.25 0 00-2.25-2.25h-6A2.252 2.252 0 004.5 7.5V21a2.25 2.25 0 002.25 2.25h6A2.25 2.25 0 0015 21v-1.245M13.786 18.75H4.5M1.5 6A5.252 5.252 0 016.75.75M18 6A5.25 5.25 0 0012.75.75"></Path>
      </Svg>
    </View>
  );
};

export default TextGivingIcon;
