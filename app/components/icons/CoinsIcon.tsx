import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const CoinsIcon: FC<IconProps> = ({color, height, width}) => {
  const widthSize = width ? width.toString() : '24';
  const heightSize = height ? height.toString() : '24';
  const strokeColor = color ? color : '#111';

  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        fill="none"
        viewBox="0 0 16 16">
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 6.5c3.038 0 5.5-1.12 5.5-2.5S11.038 1.5 8 1.5 2.5 2.62 2.5 4 4.962 6.5 8 6.5zM2.5 6.5V7c0 1.381 2.462 2.5 5.5 2.5s5.5-1.119 5.5-2.5v-.5M2.5 9.5v.5c0 1.381 2.462 2.5 5.5 2.5s5.5-1.119 5.5-2.5v-.5M2.5 12.5v.5c0 1.381 2.462 2.5 5.5 2.5s5.5-1.119 5.5-2.5v-.5"></Path>
      </Svg>
    </View>
  );
};

export default CoinsIcon;
