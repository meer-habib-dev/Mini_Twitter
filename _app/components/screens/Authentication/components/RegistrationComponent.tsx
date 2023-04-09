import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TInput from '../../../common/form/TInput';
import TButton from '../../../common/uiKits/TButton';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';

const RegistrationComponent = () => {
  const {control} = useFormHandler();
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{
          flex: 0.8,
          //   backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <TInput control={control} placeholder={'User Name'} />
          <TInput control={control} placeholder={'Email'} />
          <TInput control={control} placeholder={'Password'} password />
          {/* <TextInput
              autoCapitalize={'none'}
              //   value={email}
              blurOnSubmit={false}
              //   onSubmitEditing={() => {
              //     inputs['passwordField'].focus();
              //   }}
              //   onChangeText={text => setState({email: text, emailValidated: 1})}
              placeholderTextColor={'#000000'}
              placeholder={'E-mail'}
              style={styles.singleField}
            /> */}
        </View>
      </KeyboardAvoidingView>
      <TButton
        // disabled={typeof countries_id === 'string'}
        onPress={() => {}}
        text="Registration"
      />
    </View>
  );
};

export default RegistrationComponent;

const styles = StyleSheet.create({});
