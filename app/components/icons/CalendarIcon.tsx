import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const CalendarIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M3.335 4.667H20.67c.736 0 1.333.597 1.333 1.333v14.667c0 .736-.597 1.333-1.333 1.333H3.335a1.334 1.334 0 01-1.333-1.333V6c0-.736.597-1.333 1.333-1.333zM2.002 10h20M7.335 6.667V2M16.669 6.667V2"></Path>
      </Svg>
    </View>
  );
};

export default CalendarIcon;
