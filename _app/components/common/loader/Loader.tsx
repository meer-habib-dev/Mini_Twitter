import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {_SVGS} from '../../../@lib/assets/svgs';

interface Props {
  height?: number;
}
const Loader = ({height}: Props) => {
  return (
    <View style={styles.loaderContainer}>
      <Lottie
        style={{
          height: height ? height : 70,
        }}
        source={_SVGS.loader}
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
