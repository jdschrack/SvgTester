import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';

const ExternalLinkIcon: FC<IconProps> = ({color, height, width}) => {
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
          d="M19.5 13.159v6.617c0 1.072-.672 1.942-1.5 1.942H4.5c-.828 0-1.5-.87-1.5-1.942V7.16c0-1.072.672-1.941 1.5-1.941H11M19.132 4.652L11 12.783M13.828 4.652h5.304v5.303"></Path>
      </Svg>
    </View>
  );
};

export default ExternalLinkIcon;
