import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import TInput from '../../../common/form/TInput';
import TButton from '../../../common/uiKits/TButton';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';
import {registractionInit} from '../../../../@lib/utils/initalState/authInitialState';
import {RegistrationVS} from '../../../../@lib/utils/validationSchema/authValidationSchema';

interface Props {
  onSubmit: (
    arg: string,
    arg1: string,
    arg3?: string,
    mode?: string,
  ) => void | any;
  isLoading: boolean;
}
const RegistrationComponent = ({onSubmit, isLoading}: Props) => {
  const {control, onSubmitHandler} = useFormHandler(
    registractionInit,
    RegistrationVS,
    onSubmit,
  );
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.kyb}>
        <View style={styles.inputwrapper}>
          <TInput control={control} placeholder={'User Name'} name="username" />
          <TInput control={control} placeholder={'Email'} name="email" />
          <TInput
            control={control}
            placeholder={'Password'}
            password
            name="password"
          />
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

const styles = StyleSheet.create({
  container: {flex: 1},
  kyb: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '80%',
  },
});
