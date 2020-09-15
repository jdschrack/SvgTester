import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const WebsiteIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M.75 12a11.25 11.25 0 1022.5 0 11.25 11.25 0 00-22.5 0v0z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.289 22.921C7.767 20.689 6.75 16.633 6.75 12c0-4.633 1.017-8.689 2.539-10.921M.75 12h22.5M2.482 18h19.036M2.482 6h19.036M14.711 1.079c1.522 2.232 2.54 6.288 2.54 10.921 0 4.633-1.018 8.689-2.54 10.921"></Path>
      </Svg>
    </View>
  );
};

export default WebsiteIcon;
