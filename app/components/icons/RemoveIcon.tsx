import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

type RemoveIconProps = IconProps & {
    outlineColor?: string,
}

const RemoveIcon: FC<RemoveIconProps> = ({color, height, width, outlineColor}) => {
  const widthSize = width ? width.toString() : '24';
  const heightSize = height ? height.toString() : '24';
  const strokeColor = color ? color : '#111';
  const outline = outlineColor ? outlineColor : '#111';
  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        fill={strokeColor}
        viewBox="0 0 24 24">
        <Path
          stroke={outline}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zM8 16l8-8M16 16L8 8"></Path>
      </Svg>
    </View>
  );
};

export default RemoveIcon;
