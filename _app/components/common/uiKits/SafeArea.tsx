import React, {ReactNode} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const SafeArea = ({children, style}: Props): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default SafeArea;
