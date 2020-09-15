import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const ColumnsIcon: FC<IconProps> = ({color, height, width}) => {
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
        <Rect
          width="6"
          height="14"
          x="3"
          y="8"
          stroke={strokeColor}
          strokeWidth="1.5"
          rx="1"></Rect>
        <Rect
          width="6"
          height="14"
          x="15"
          y="8"
          stroke={strokeColor}
          strokeWidth="1.5"
          rx="1"></Rect>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2 1.997h8M14 1.997h8"></Path>
      </Svg>
    </View>
  );
};

export default ColumnsIcon;
