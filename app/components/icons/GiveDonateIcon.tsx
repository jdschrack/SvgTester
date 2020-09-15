import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const GiveDonateIcon: FC<IconProps> = ({color, height, width}) => {
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
          <Path d="M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M15.75 13.875L9.358 7.207a3.785 3.785 0 01.433-5.722 3.782 3.782 0 014.915.373L15.75 2.9l1.044-1.044a3.782 3.782 0 016.057.983v0a3.784 3.784 0 01-.709 4.366l-6.392 6.67zM.75 14.25v9"></Path>
        </G>
      </Svg>
    </View>
  );
};

export default GiveDonateIcon;
