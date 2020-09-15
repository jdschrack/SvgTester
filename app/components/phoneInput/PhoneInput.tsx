import React, {FC, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import * as phoneUtil from 'google-libphonenumber';

export interface Props {
   phoneNumberStyle?: TextStyle;
}

const PhoneEntry: FC<Props> = (props) => {
   const phoneInput = useRef<PhoneInput>(null);
   const {entryPhoneNumber, setEntryPhoneNumber} = useState<string>(
      '7063056328',
   );
   const formatPhoneForInternational = (
      countryCode?: string,
      phoneNumber: string,
   ): string => {
      try {
         const PNF = phoneUtil.PhoneNumberFormat;
         let phoneNumberUtility = phoneUtil.PhoneNumberUtil.getInstance();
         const unformattedNumber = phoneUtil.PhoneNumberUtil.getInstance().parseAndKeepRawInput(
            phoneNumber,
            countryCode,
         );
         return countryCode === 'US'
            ? phoneNumberUtility.format(unformattedNumber, PNF.NATIONAL)
            : phoneNumberUtility.formatOutOfCountryCallingNumber(
                 unformattedNumber,
                 countryCode,
              );
      } catch (e) {
         return phoneNumber;
      }
   };

   const handleInputChange = (inputValue: string): void => {
      console.log(inputValue, phoneInput.current?.isValidNumber());
   };

   useEffect(() => {
      let country = phoneInput.current?.getCountryCode();
      console.log(country);
   }, []);
   return (
      <>
         <View style={styles.phoneInputField}>
            <PhoneInput
               ref={phoneInput}
               onChangeText={(text) => handleInputChange(text)}
               defaultCode={'US'}
               defaultValue={formatPhoneForInternational(
                  phoneInput.current?.getCountryCode(),
                  entryPhoneNumber,
               )}
               codeTextStyle={[styles.codeTextStyle, styles.noMarginPadding]}
               textInputStyle={[styles.inputField, styles.noMarginPadding]}
               textInputProps={{returnKeyLabel: 'done', returnKeyType: 'done'}}
               containerStyle={[styles.containerStyle, styles.noMarginPadding]}
               textContainerStyle={[
                  styles.textContainerStyle,
                  styles.noMarginPadding,
               ]}
               flagButtonStyle={[
                  styles.flagButtonStyle,
                  styles.noMarginPadding,
               ]}
            />
         </View>
         <Text>
            {JSON.stringify(phoneInput.current?.getCountryCode, null, 2)}
         </Text>
      </>
   );
};

const styles = StyleSheet.create({
   phoneInputField: {
      borderWidth: 1,
      borderColor: '#E5E8E8',
      borderRadius: 8,
      padding: 0,
      margin: 0,
   },
   noMarginPadding: {
      padding: 0,
      margin: 0,
   },
   flagButtonStyle: {
      padding: 0,
      margin: 0,
      marginLeft: 16,
      height: 35,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   containerStyle: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
   },
   textContainerStyle: {
      padding: 0,
      margin: 0,
      backgroundColor: '#fff',
   },
   codeTextStyle: {
      fontSize: 16,
      color: '#414142',
   },
   inputField: {
      backgroundColor: '#fff',
      color: '#414142',
      fontSize: 16,
      flex: 1,
      flexGrow: 1,
      margin: 0,
      padding: 0,
   },
});

PhoneEntry.propTypes = {};

export default PhoneEntry;
