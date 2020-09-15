import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const AnnouncementsIcon: FC<IconProps> = ({color, height, width}) => {
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
        <G
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clip-path="url(#clip0)">
          <Path d="M7 15H4.75a3.75 3.75 0 010-7.5H7V15zM7 15a22.3 22.3 0 0112.366 3.744l1.134.756V3l-1.134.756A22.3 22.3 0 017 7.5V15zM23.5 9.75v3M7 15a7.24 7.24 0 002.25 5.25"></Path>
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Path fill="#fff" d="M0 0H24V24H0z"></Path>
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default AnnouncementsIcon;
