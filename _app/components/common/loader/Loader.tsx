import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {_JSON} from '../../../@lib/assets/json';

interface Props {
  height?: number;
  primary?: Boolean;
}
const Loader = ({height, primary}: Props) => {
  return (
    <View style={styles.loaderContainer}>
      <Lottie
        style={{
          height: height ? height : 70,
        }}
        source={primary ? _JSON.loaderPrimary : _JSON.loader}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  loader: {
    width: '100%',
  },
});
