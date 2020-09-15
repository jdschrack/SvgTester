import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const PaymentMethodsIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M21.75 18v3a1.5 1.5 0 01-1.5 1.5H3a2.25 2.25 0 01-2.25-2.25V3.75A2.25 2.25 0 013 1.5h15.75a1.5 1.5 0 011.5 1.5v2.25"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.75 18a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5H18a3.75 3.75 0 000 7.5h3.75z"></Path>
        <Path
          fill="#111"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 13.875a.375.375 0 110 .75.375.375 0 010-.75z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.75 10.5V6.75a1.5 1.5 0 00-1.5-1.5H5.625a1.756 1.756 0 01-1.614-.895"></Path>
      </Svg>
    </View>
  );
};

export default PaymentMethodsIcon;
