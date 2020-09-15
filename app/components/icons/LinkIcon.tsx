import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const LinkIcon: FC<IconProps> = ({color, height, width}) => {
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
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.655 17.993a4.558 4.558 0 01-6.047 2.178 4.558 4.558 0 01-2.178-6.047l1.382-2.937a4.558 4.558 0 016.046-2.178 4.546 4.546 0 012.511 3.191"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.846 6.107a4.558 4.558 0 016.047-2.178 4.558 4.558 0 012.178 6.046l-1.382 2.937a4.558 4.558 0 01-6.047 2.178 4.534 4.534 0 01-2.352-2.619"></Path>
      </Svg>
    </View>
  );
};

export default LinkIcon;
