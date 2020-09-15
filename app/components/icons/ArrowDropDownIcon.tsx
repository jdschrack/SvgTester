import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const ArrowDropDownIcon: FC<IconProps> = ({color, height, width}) => {
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
          fill={strokeColor}
          d="M12.354 15.146l5.792-5.792a.5.5 0 00-.353-.854H6.207a.5.5 0 00-.353.854l5.792 5.792a.5.5 0 00.708 0z"></Path>
      </Svg>
    </View>
  );
};

export default ArrowDropDownIcon;
