import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const MemberExperienceIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M22.125 23.25l-3-4.5V13.5c0-2-3.8-4.14-5.25-5.25M15.805 14.793l-3.648-2.923a1.303 1.303 0 10-1.843 1.843l3.534 3.987v2.5c0 1.181 1.687 3.045 1.687 3.045"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.836 17.978a2.734 2.734 0 01-2.694 2.272H4.608a2.734 2.734 0 01-2.733-2.733V3.482A2.732 2.732 0 014.607.75H10.875a3 3 0 013 3v9.5M1.875 15.75h6"></Path>
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.017 9.344a2.221 2.221 0 001.858.875c1.139 0 2.063-.693 2.063-1.547s-.924-1.547-2.063-1.547c-1.139 0-2.062-.693-2.062-1.548 0-.855.923-1.547 2.062-1.547a2.225 2.225 0 011.858.875M7.875 10.219v1.031M7.875 3v1.03"></Path>
      </Svg>
    </View>
  );
};

export default MemberExperienceIcon;
