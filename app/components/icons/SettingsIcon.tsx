import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const SettingsIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M10.546 2.438a1.957 1.957 0 002.908 0L14.4 1.4a1.958 1.958 0 013.41 1.413l-.071 1.4a1.958 1.958 0 002.05 2.054l1.4-.071a1.959 1.959 0 011.41 3.41l-1.041.94a1.96 1.96 0 000 2.909l1.042.94a1.958 1.958 0 01-1.413 3.41l-1.4-.071a1.958 1.958 0 00-2.056 2.056l.07 1.4A1.959 1.959 0 0114.4 22.6l-.941-1.041a1.96 1.96 0 00-2.908 0L9.606 22.6A1.959 1.959 0 016.2 21.192l.072-1.4a1.958 1.958 0 00-2.056-2.056l-1.4.071A1.957 1.957 0 011.4 14.4l1.041-.94a1.96 1.96 0 000-2.909L1.4 9.606A1.959 1.959 0 012.809 6.2l1.4.071a1.958 1.958 0 002.058-2.06L6.2 2.81A1.959 1.959 0 019.606 1.4l.94 1.038z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 7.501a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"></Path>
      </Svg>
    </View>
  );
};

export default SettingsIcon;
