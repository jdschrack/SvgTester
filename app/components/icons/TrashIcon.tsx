import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';


const TrashIcon: FC<IconProps> = ({color, height, width}) => {
    const widthSize = width ? width.toString() : '24';
    const heightSize = height ? height.toString() : '24';
    const strokeColor = color ? color : '#111';


    return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
      fill='none'
      viewBox='0 0 24 24'
    >
      <Path
          stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M1.5 5h21M14.25 1.5h-4.5A1.5 1.5 0 008.25 3v2h7.5V3a1.5 1.5 0 00-1.5-1.5zM4 5h16l-.895 16.11A2 2 0 0117.108 23H6.892a2 2 0 01-1.997-1.89L4 5z'
      ></Path>
    </Svg>
    </View>
    );
};


export default TrashIcon;