import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const SuccessIcon: FC<IconProps> = ({color, height, width}) => {
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
          clip-Path="url(#clip0)">
          <Path d="M6.75 9l3.294 4.611a1.526 1.526 0 002.414.09L23.25.749"></Path>
          <Path d="M16.783 3.824C11.858.776 5.395 2.298 2.347 7.223S.821 18.611 5.746 21.659s11.388 1.526 14.436-3.399a10.489 10.489 0 00.618-9.883"></Path>
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

export default SuccessIcon;
