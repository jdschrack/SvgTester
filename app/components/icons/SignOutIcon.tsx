import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const SignOutIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M1.283 12.004h15.004M12.714 15.576l3.573-3.572-3.573-3.572"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.718 16.382c2.418 4.967 8.404 7.033 13.37 4.615 4.967-2.417 7.034-8.403 4.616-13.37C19.286 2.66 13.3.593 8.334 3.012a10.002 10.002 0 00-4.445 4.28"></Path>
      </Svg>
    </View>
  );
};

export default SignOutIcon;
