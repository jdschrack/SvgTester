import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const AddIcon: FC<IconProps> = ({color, height, width}) => {
  const widthSize = width ? width.toString() : '24';
  const heightSize = height ? height.toString() : '24';
  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        fill={'none'}
        viewBox={`0 0 24 24`}>
        <Path
          stroke={color ? color : '#111'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2 12h20M12 2v20"></Path>
      </Svg>
    </View>
  );
};

export default AddIcon;
