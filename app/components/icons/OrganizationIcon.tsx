import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const OrganizationIcon: FC<IconProps> = ({color, height, width}) => {
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
          <Path d="M3.75 18.748a6.29 6.29 0 016.545-6h3.41a6.29 6.29 0 016.545 6M12 6.748v12M12 .748a3 3 0 110 6 3 3 0 010-6zM3.75 18.748a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM12 18.748a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM20.25 18.748a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"></Path>
        </G>
      </Svg>
    </View>
  );
};

export default OrganizationIcon;
