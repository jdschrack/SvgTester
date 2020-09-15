import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const HeartIcon: FC<IconProps> = ({color, height, width}) => {
  const widthSize = width ? width.toString() : '24';
  const heightSize = height ? height.toString() : '24';
  const strokeColor = color ? color : '#111';

  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        fill={'none'}
        viewBox="0 0 24 24">
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 19.5l-7.031-7.616A4.442 4.442 0 014.19 6.9v0a4.08 4.08 0 016.66-1.122L12 6.971l1.148-1.192A4.08 4.08 0 0119.805 6.9v0a4.438 4.438 0 01-.779 4.983L12 19.5z"></Path>
      </Svg>
    </View>
  );
};

export default HeartIcon;
