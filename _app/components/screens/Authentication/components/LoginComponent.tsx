import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import TButton from '../../../common/uiKits/TButton';
import TInput from '../../../common/form/TInput';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';
import {loginInit} from '../../../../@lib/utils/initalState/authInitialState';
import {LoginVS} from '../../../../@lib/utils/validationSchema/authValidationSchema';
interface Props {
  onSubmit: (
    arg: string,
    arg1: string,
    arg3?: string,
    mode?: string,
  ) => void | any;
  isLoading: boolean;
}
const LoginComponent = ({onSubmit, isLoading}: Props) => {
  const {control, onSubmitHandler} = useFormHandler(
    loginInit,
    LoginVS,
    onSubmit,
  );
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.kyb}>
        <View style={styles.inputWrapper}>
          <TInput control={control} placeholder={'Email'} name={'email'} />
          <TInput
            control={control}
            placeholder={'Password'}
            password
            name={'password'}
          />
        </View>
      </KeyboardAvoidingView>
      <TButton
        disabled={isLoading}
        onPress={onSubmitHandler}
        isLoading={isLoading}
        text="Log in"
      />
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {flex: 1},
  kyb: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '80%',
  },
});
