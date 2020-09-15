import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import PhoneInput from './app/components/phoneInput/PhoneInput';

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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <PhoneInput />
      </View>
    </SafeAreaView>
  );
};

export default App;
