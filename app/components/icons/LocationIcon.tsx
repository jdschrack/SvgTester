import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const LocationIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M12 .75a7.5 7.5 0 017.5 7.5c0 3.407-5.074 11.95-6.875 14.665a.751.751 0 01-1.25 0C9.574 20.2 4.5 11.657 4.5 8.25A7.5 7.5 0 0112 .75v0z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.25 8.25a3.75 3.75 0 107.5 0 3.75 3.75 0 00-7.5 0z"></Path>
      </Svg>
    </View>
  );
};

export default LocationIcon;
