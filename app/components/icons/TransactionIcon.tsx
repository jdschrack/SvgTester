import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const TransactionIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M5.25 4.5h3M5.25 7.5h3M2.25 11.25h6V1.5A.75.75 0 007.5.75H3a.75.75 0 00-.75.75v9.75zM17.25 11.25a6 6 0 110 12 6 6 0 010-12zM12.75.75h4.5a3 3 0 013 3v3"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 4.5l2.25 2.25L22.5 4.5M10.5 23.25H6a3 3 0 01-3-3v-3"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.25 19.5L3 17.25.75 19.5M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.341 1.341 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75M9.75 11.25h-1.5M2.25 11.25H.75"></Path>
      </Svg>
    </View>
  );
};

export default TransactionIcon;
