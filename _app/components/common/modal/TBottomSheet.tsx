import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Colors from '../../../@lib/constants/theme/Colors';

const TBottomSheet = ({isVisible, onClose, children}) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 300,
            easing: Easing.out(Easing.ease),
          }),
        },
      ],
    };
  });

  React.useEffect(() => {
    translateY.value = isVisible ? 0 : 500;
  }, [isVisible]);

  return (
    <View>
      <TouchableOpacity style={[styles.backdrop]} onPress={onClose} />
      <Animated.View style={[styles.bottomSheet, animatedStyle]}>
        <TouchableOpacity onPress={onClose}>
          <View style={styles.dragHandle} />
        </TouchableOpacity>
        <View style={styles.childWrapper}>{children}</View>
      </Animated.View>
    </View>
  );
};
export default TBottomSheet;
const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.compose,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
    width: '100%',
    backgroundColor: Colors.iosBG,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  childWrapper: {width: '100%', flex: 1},
  dragHandle: {
    width: 48,
    height: 4,
    backgroundColor: '#CCCCCC',
    borderRadius: 2,
    marginBottom: 16,
  },
});
