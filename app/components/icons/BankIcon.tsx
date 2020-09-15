import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const BankIcon: FC<IconProps> = ({color, height, width}) => {
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
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 1.955L2 7.409v2.727h20V7.41L12 1.955zM3.818 18.318v-5.454M9.273 18.318v-5.454M14.727 18.318v-5.454M20.182 18.318v-5.454M2 21.046h20"></Path>
        <Path
          fill={strokeColor}
          stroke={strokeColor}
          d="M12.5 6.59a.5.5 0 11-1 .001.5.5 0 011 0z"></Path>
      </Svg>
    </View>
  );
};

export default BankIcon;
