import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const MoreIcon: FC<IconProps> = ({color, height, width}) => {
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
        <G fill={strokeColor} clip-Path="url(#clip0)">
          <Path d="M15 3a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 11-6 0 3 3 0 016 0zM15 21a3 3 0 11-6 0 3 3 0 016 0z"></Path>
        </G>
        
      </Svg>
    </View>
  );
};

export default MoreIcon;
