import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const MessageIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M12.668 2a9.32 9.32 0 00-7.926 14.244L2.002 22l5.754-2.74A9.348 9.348 0 0010 20.275a9.337 9.337 0 0010.61-4.014A9.333 9.333 0 0012.668 2z"></Path>
      </Svg>
    </View>
  );
};

export default MessageIcon;
