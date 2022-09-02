import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import React from 'react';

const Ball = () => {
  const END_X_POSITION = 250;
  const END_Y_POSITION = 250;

  const isPressed = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offsetX.value},
        {translateY: offsetY.value},
        {scale: withSpring(isPressed.value ? 1.2 : 1)},
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  const start = useSharedValue({x: 0, y: 0});
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offsetX.value = e.translationX + start.value.x;
      offsetY.value = e.translationY + start.value.y;
    })
    .onEnd(e => {
      if (
        offsetX.value > 280 ||
        offsetY.value > 280 ||
        offsetX.value < 0 ||
        offsetY.value < 0
      ) {
        offsetX.value = withTiming(0, {duration: 200});
        offsetY.value = withTiming(0, {duration: 200});
        start.value = {
          x: 0,
          y: 0,
        };
      } else {
        start.value = {
          x: offsetX.value,
          y: offsetY.value,
        };
      }
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]} />
      </GestureDetector>
    </View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '100%',
    height: 400,
    borderWidth: 20,
    borderColor: '#5F73F1',
    borderBottomColor: 'blue',
  },
  ball: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: 'blue',
    // alignSelf: 'center',
  },
});
