import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {_JSON} from '../../../@lib/assets/json';

interface Props {
  height?: number;
}
const NoSeachResult = ({height}: Props) => {
  return (
    <View style={styles.loaderContainer}>
      <Lottie
        style={{
          height: height ? height : 300,
        }}
        source={_JSON.nosearch}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default NoSeachResult;

const styles = StyleSheet.create({
  loaderContainer: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  loader: {
    width: '100%',
  },
});
