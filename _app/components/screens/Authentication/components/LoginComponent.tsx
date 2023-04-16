import {StyleSheet, View} from 'react-native';
import React from 'react';
import TButton from '../../../common/uiKits/TButton';
import TInput from '../../../common/form/TInput';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';
import {loginInit} from '../../../../@lib/utils/initalState/authInitialState';
import {LoginVS} from '../../../../@lib/utils/validationSchema/authValidationSchema';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
    <KeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      contentContainerStyle={styles.kyb}>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TInput control={control} placeholder={'Email'} name={'email'} />
          <TInput
            control={control}
            placeholder={'Password'}
            password
            name={'password'}
          />
        </View>
        <TButton
          disabled={isLoading}
          onPress={onSubmitHandler}
          isLoading={isLoading}
          text="Log in"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {flex: 1},
  kyb: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '80%',
    flex: 1,
  },
});
