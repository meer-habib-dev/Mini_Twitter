import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import TButton from '../../../common/uiKits/TButton';
import Colors from '../../../../@lib/constants/theme/Colors';
import TInput from '../../../common/form/TInput';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';
import {loginInit} from '../../../../@lib/utils/initalState/authInitialState';
import {LoginVS} from '../../../../@lib/utils/validationSchema/authValidationSchema';

const LoginComponent = ({onSubmit, isLoading}) => {
  const {control, onSubmitHandler} = useFormHandler(
    loginInit,
    LoginVS,
    onSubmit,
  );
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
          <TInput control={control} placeholder={'Email'} name={'email'} />
          <TInput
            control={control}
            placeholder={'Password'}
            password
            name={'password'}
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
        // disabled={typeof countries_id === 'string'}
        onPress={onSubmitHandler}
        isLoading={isLoading}
        text="Log in"
      />
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({});
