import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import TInput from '../../../common/form/TInput';
import TButton from '../../../common/uiKits/TButton';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';
import {registractionInit} from '../../../../@lib/utils/initalState/authInitialState';
import {RegistrationVS} from '../../../../@lib/utils/validationSchema/authValidationSchema';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const RegistrationComponent = ({onSubmit, isLoading}) => {
  const {control, onSubmitHandler, errors} = useFormHandler(
    registractionInit,
    RegistrationVS,
    onSubmit,
  );
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '80%',
          }}>
          <TInput control={control} placeholder={'User Name'} name="username" />
          <TInput control={control} placeholder={'Email'} name="email" />
          <TInput
            control={control}
            placeholder={'Password'}
            password
            name="password"
          />
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
        onPress={onSubmitHandler}
        text="Registration"
        isLoading={isLoading}
      />
    </View>
  );
};

export default RegistrationComponent;

const styles = StyleSheet.create({});
