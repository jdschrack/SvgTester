import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const UserAccountIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M12 2a4.667 4.667 0 11-.001 9.335A4.667 4.667 0 0112 2zM3.333 22A8.666 8.666 0 0112 13.333 8.666 8.666 0 0120.667 22"></Path>
      </Svg>
    </View>
  );
};

export default UserAccountIcon;
