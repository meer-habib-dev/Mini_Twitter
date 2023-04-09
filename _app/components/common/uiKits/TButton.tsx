/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  useColorScheme,
} from 'react-native';
import Colors from '../../../@lib/constants/theme/Colors';

interface Props {
  // containerStyle: any;
  // progressStyle?: ViewStyle | undefined;
  // onSelect: ((event: GestureResponderEvent) => void) | undefined;
  // textAlignment: ViewStyle | undefined;
  // isLeftIcon?: any;
  // titleStyle: TextStyle | undefined;
  // title: any;
  // icon?: any;
  // loading?: boolean;
  // color?: string;
}
const TButton = ({disabled, onPress, text}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.continueButtonFlex}>
      <TouchableOpacity
        disabled={disabled ? disabled : false}
        onPress={onPress}
        style={[
          styles.continueButtonView,
          {backgroundColor: !disabled ? Colors.primary : Colors.disabled},
        ]}>
        <Text style={styles.continueButtonText}>{text ? text : 'Nastavi'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continueButtonFlex: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueButtonView: {
    width: '80%',
    height: 60,
    marginBottom: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: 800,
    justifyContent: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 4,
  },

  continueButtonText: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'SinewsSansProDEMO-Medium',
  },
});
export default TButton;
