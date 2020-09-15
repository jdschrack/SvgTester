import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import CheckBox from './app/components/checkbox/CheckBox';

declare const global: {HermesInternal: null | {}};

const App = () => {
   const bgColor = '#fff';
   const styles = StyleSheet.create({
      headLine: {
         fontSize: 32,
      },
      safeAreaView: {
         backgroundColor: bgColor,
         margin: 0,
         flex: 1,
         flexDirection: 'column',
      },
      container: {
         padding: 18,
      },
   });

   const [checked, setChecked] = useState<boolean>(false);

   const handleCheck = () => {
      setChecked(!checked);
   };

   return (
      <SafeAreaView style={styles.safeAreaView}>
         <StatusBar barStyle='light-content' />
         {/* <View style={styles.container}>
        <PhoneInput />
      </View> */}
         <View style={styles.container}>
            <CheckBox
               selected={checked}
               handleCheck={handleCheck}
               label={'Set as preferred payment method'}
            />
         </View>
      </SafeAreaView>
   );
};

export default App;
