import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const HelpIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M9.25 9.545c0-.467.139-.924.4-1.323a2.678 2.678 0 011.086-.937 2.937 2.937 0 012.852.182c.412.27.735.639.936 1.067.2.428.27.9.2 1.361-.07.463-.275.899-.593 1.26a2.76 2.76 0 01-1.214.79c-.268.088-.5.251-.665.466a1.21 1.21 0 00-.252.735V14M12 17v-.5"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5z"></Path>
      </Svg>
    </View>
  );
};

export default HelpIcon;
