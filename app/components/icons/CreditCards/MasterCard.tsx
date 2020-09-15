import React, {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../types/iconProps';

const MasterCardIcon: FC<IconProps> = ({height, width}) => {
  const widthSize = width ? width.toString() : '51';
  const heightSize = height ? height.toString() : '16';

  return (
    <View>
      <Svg
        width={widthSize}
        height={heightSize}
        viewBox={'0 0 51 16'}
        fill={'none'}>
        <Path
          d={'M28.8445 1.71112H21.8445V14.2889H28.8445V1.71112Z'}
          fill={'#FF5F00'}
        />
        <Path
          d={
            'M22.2889 8C22.2889 5.44444 23.4889 3.17778 25.3334 1.71111C23.9778 0.644444 22.2667 0 20.4 0C15.9778 0 12.4 3.57778 12.4 8C12.4 12.4222 15.9778 16 20.4 16C22.2667 16 23.9778 15.3556 25.3334 14.2889C23.4889 12.8222 22.2889 10.5556 22.2889 8Z'
          }
          fill={'#EB001B'}
        />
        <Path
          d={
            'M38.2889 8C38.2889 12.4222 34.7112 16 30.2889 16C28.4223 16 26.7112 15.3556 25.3556 14.2889C27.2 12.8222 28.4 10.5556 28.4 8C28.4 5.44444 27.2 3.17778 25.3334 1.71111C26.7112 0.644444 28.4223 0 30.2889 0C34.7112 0 38.2889 3.57778 38.2889 8Z'
          }
          fill={'#F79E1B'}
        />
        <Path
          d={
            'M37.5334 12.9556V12.6889H37.6445V12.6444H37.3778V12.6889H37.4889V12.9556H37.5334ZM38.0445 12.9556V12.6444H37.9556L37.8667 12.8667L37.7778 12.6444H37.6889V12.9556H37.7556V12.7111L37.8445 12.9111H37.9111L38 12.7111V12.9556H38.0445Z'
          }
          fill={'#F79E1B'}
        />
      </Svg>
    </View>
  );
};

export default MasterCardIcon;
