import {Platform, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Switch, TextInput} from 'react-native-gesture-handler';
import Colors from '../../../@lib/constants/theme/Colors';

const TInput = ({control, placeholder, password, name}) => {
  const [showPass, setShowPass] = useState(password);
  function toggleSwitch() {
    setShowPass(!showPass);
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={{required: true}}
      render={({field: {onChange, onBlur, value}, formState: {errors}}) => {
        console.log('erro', errors[name]?.message);
        return (
          <View
            style={[
              styles.singleField,

              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                borderBottomWidth: errors[name]?.message ? 1 : 0.5,
                borderBottomColor: errors[name]?.message
                  ? Colors.alert
                  : 'rgba(0,0,0,0.5)',
              },
            ]}>
            <TextInput
              style={styles.singleField}
              onBlur={onBlur}
              placeholderTextColor={
                errors[name]?.message ? Colors.alert : Colors.placeholder
              }
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={showPass}
            />
            {password && (
              <Switch
                trackColor={{
                  true: Colors.primary,
                  false: Platform.OS === 'android' ? '#ACACAC' : '#ACACAC',
                }}
                thumbColor="#FFF"
                onValueChange={toggleSwitch}
                value={!showPass}
              />
            )}
          </View>
        );
      }}
    />
  );
};

export default TInput;

const styles = StyleSheet.create({
  singleField: {
    width: '80%',
    color: '#000000',
    height: 40,

    fontSize: 17,
  },
});
