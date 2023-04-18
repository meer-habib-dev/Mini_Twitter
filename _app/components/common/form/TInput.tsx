import {
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Switch,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
// import {Switch, TextInput} from 'react-native-gesture-handler';
import Colors from '../../../@lib/constants/theme/Colors';
interface Props {
  control: any;
  placeholder: string;
  password?: boolean;
  name: string;
  style?: StyleProp<ViewStyle>;
  numberOfLines?: number;
  multiline?: boolean;
}
const TInput = ({
  control,
  placeholder,
  password,
  name,
  style,
  numberOfLines,
  multiline,
}: Props) => {
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
        return (
          <View
            style={
              style
                ? style
                : [
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
                  ]
            }>
            <TextInput
              style={[
                styles.singleField,
                {
                  flex: 1,
                  minHeight: multiline ? 200 : 40,
                  maxHeight: multiline ? 200 : 40,
                },
              ]}
              onBlur={onBlur}
              autoCapitalize="none"
              placeholderTextColor={
                errors[name]?.message ? Colors.alert : Colors.placeholder
              }
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={showPass}
              numberOfLines={numberOfLines}
              multiline={multiline}
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
    color: '#000000',
    fontSize: 17,
  },
});
