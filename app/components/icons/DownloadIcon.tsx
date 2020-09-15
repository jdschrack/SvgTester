import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const DownloadIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M12.001 3.75v12M7.501 11.25l4.5 4.5 4.5-4.5M22.251 15.75v1.5a3 3 0 01-3 3h-14.5a3 3 0 01-3-3v-1.5"></Path>
      </Svg>
    </View>
  );
};

export default DownloadIcon;
