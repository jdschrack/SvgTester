import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, ClipPath, Defs, G} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const PhoneIcon: FC<IconProps> = ({color, height, width}) => {
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
        <G clip-path="url(#clip0)">
          <Path
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.04 22.39l.012.007a5.533 5.533 0 006.884-.755l.774-.774a1.846 1.846 0 000-2.609L19.449 15a1.846 1.846 0 00-2.609 0v0a1.844 1.844 0 01-2.608 0L9.014 9.781a1.846 1.846 0 010-2.609v0a1.843 1.843 0 000-2.608L5.754 1.3a1.846 1.846 0 00-2.609 0l-.774.774a5.535 5.535 0 00-.756 6.884l.008.012A49.935 49.935 0 0015.04 22.39v0z"></Path>
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

export default PhoneIcon;
