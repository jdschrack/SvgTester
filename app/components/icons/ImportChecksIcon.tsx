import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const ImportChecksIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M15 9.5H6M8 14.5H6M18.25 14.5l-1.591-.332a2.22 2.22 0 00-1.531.233v0a2.22 2.22 0 01-2.156 0L12.25 14"></Path>
        <Rect
          width="20"
          height="14"
          x="2"
          y="5"
          stroke={strokeColor}
          strokeWidth="1.5"
          rx="2"></Rect>
      </Svg>
    </View>
  );
};

export default ImportChecksIcon;
