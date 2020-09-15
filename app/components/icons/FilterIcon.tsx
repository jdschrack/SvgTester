import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const FilterIcon: FC<IconProps> = ({color, height, width}) => {
  const widthSize = width ? width.toString() : '24';
  const heightSize = height ? height.toString() : '24';
  const strokeColor = color ? color : '#111';

  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        fill='none'
        viewBox='0 0 24 24'>
        <Path
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
          d='M22 4.793a.5.5 0 01-.146.353l-7.708 7.708a.5.5 0 00-.146.353v6.984a.5.5 0 01-.276.447l-3 1.5a.5.5 0 01-.724-.447v-8.484a.5.5 0 00-.146-.353L2.146 5.146A.5.5 0 012 4.793V2.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v2.293z'></Path>
      </Svg>
    </View>
  );
};

export default FilterIcon;
