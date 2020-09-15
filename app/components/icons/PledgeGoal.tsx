import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const PledgeGoalIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M1.125 7.5l15.75 15.75M1.875 8.25l6.311-6.311a1.5 1.5 0 012.121 0l6.439 6.44-7.371 7.371-7.5-7.5z"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.246 3.879L15.375.75l7.5 7.5-6.063 6.063a1.499 1.499 0 01-2.122 0l-1.937-1.937M17.256 13.869a4.2 4.2 0 01-.51-5.49"></Path>
      </Svg>
    </View>
  );
};

export default PledgeGoalIcon;
