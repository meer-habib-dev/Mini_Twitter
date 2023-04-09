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
    <View
      style={{
        flex: 1,
        backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
      }}>
      <TouchableOpacity style={[styles.backdrop]} onPress={onClose} />
      <Animated.View style={[styles.bottomSheet, animatedStyle]}>
        <TouchableOpacity onPress={onClose}>
          <View style={styles.dragHandle} />
        </TouchableOpacity>
        {children}
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
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dragHandle: {
    width: 48,
    height: 4,
    backgroundColor: '#CCCCCC',
    borderRadius: 2,
    marginBottom: 16,
  },
});
