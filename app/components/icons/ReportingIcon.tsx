import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const ReportingIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M21.75 21.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629c.398 0 .779.158 1.06.439l5.872 5.872c.281.281.439.662.439 1.06V21.75z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.75 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M6.2 11.594c.44.577 1.133.904 1.858.875 1.139 0 2.063-.693 2.063-1.547S9.2 9.376 8.062 9.376C6.924 9.376 6 8.683 6 7.828c0-.855.924-1.547 2.062-1.547a2.221 2.221 0 011.858.875M8.062 12.469V13.5M8.062 5.25v1.031M12 15h6M6.75 19.5H18"></Path>
      </Svg>
    </View>
  );
};

export default ReportingIcon;
