import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const UpDownIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M11.646 18.646a.5.5 0 00.708 0l2.792-2.792a.5.5 0 00-.353-.854H9.207a.5.5 0 00-.353.854l2.792 2.792zM12.354 5.354a.5.5 0 00-.708 0L8.854 8.146A.5.5 0 009.207 9h5.586a.5.5 0 00.353-.854l-2.792-2.792z"></Path>
      </Svg>
    </View>
  );
};

export default UpDownIcon;
