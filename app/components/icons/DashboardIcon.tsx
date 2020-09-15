import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {ClipPath, Path, G, Defs} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const DashboardIcon: FC<IconProps> = ({color, height, width}) => {
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
        <G
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clip-Path="url(#clip0)">
          <Path d="M2.246.75h19.5a1.5 1.5 0 011.5 1.5v19.5a1.5 1.5 0 01-1.5 1.5h-19.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5z"></Path>
          <Path d="M8.246 19.5l3.97-3.97a.75.75 0 011.061 0l1.939 1.939a.75.75 0 001.061 0l3.969-3.969M8.246 3.75a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"></Path>
          <Path d="M8.246 3.75v4.5l3.182 3.182M16.496 5.25h3M16.496 8.25h3"></Path>
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Path fill="#fff" d="M0 0H24V24H0z"></Path>
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default DashboardIcon;
