import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const EditIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M21.057 2.942a3.234 3.234 0 00-4.574.01l-.021.022L3.573 15.862 2 22l6.138-1.574L21.026 7.537a3.233 3.233 0 00.054-4.571l-.023-.024zM16.094 3.342l4.564 4.564M3.574 15.861l4.568 4.56"></Path>
      </Svg>
    </View>
  );
};

export default EditIcon;
