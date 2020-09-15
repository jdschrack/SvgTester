import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../types/iconProps';


const UsersIcon: FC<IconProps> = ({color, height, width}) => {
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
        d='M4.5 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM4.5 9.75A3.75 3.75 0 00.75 13.5v2.25h1.5l.75 6h3M19.5 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM19.5 9.75a3.75 3.75 0 013.75 3.75v2.25h-1.5l-.75 6h-3M12 .75a3 3 0 110 6 3 3 0 010-6zM17.25 13.5a5.25 5.25 0 00-10.5 0v2.25H9l.75 7.5h4.5l.75-7.5h2.25V13.5z'
      ></Path>
    </Svg>
    </View>
    );
};


export default UsersIcon;