import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {Switch, TextInput} from 'react-native-gesture-handler';
import Colors from '../../../@lib/constants/theme/Colors';

const TInput = ({
  control,
  placeholder,
  password,
  toggleSwitch,
  showPassword,
}) => {
  return (
    <Controller
      control={control}
      name="firstName"
      rules={{required: true}}
      render={({field: {onChange, onBlur, value}}) => (
        <View
          style={[
            styles.singleField,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            },
          ]}>
          <TextInput
            style={styles.singleField}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
          />
          {password && (
            <Switch
              trackColor={{
                true: Colors.primary,
                false: Platform.OS === 'android' ? '#ACACAC' : '#ACACAC',
              }}
              thumbColor="#FFF"
              onValueChange={toggleSwitch}
              value={showPassword}
            />
          )}
        </View>
      )}
    />
  );
};

export default TInput;

const styles = StyleSheet.create({
  singleField: {
    width: '80%',
    color: '#000000',
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    fontSize: 17,
  },
});
