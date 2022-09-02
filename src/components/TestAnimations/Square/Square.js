import {StyleSheet, View, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import React from 'react';

const Square = () => {
  const END_POSITION = 300;
  const onLeft = useSharedValue(true);
  const position = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (onLeft.value) {
        position.value = e.translationX;
      } else {
        position.value = END_POSITION + e.translationX;
      }
    })
    .onEnd(e => {
      if (position.value > END_POSITION / 1.5) {
        position.value = withTiming(END_POSITION, {duration: 200});
        onLeft.value = false;
      } else {
        position.value = withTiming(0, {duration: 200});
        onLeft.value = true;
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  return (
    <View style={styles.container}>
      <View style={[styles.directionContainer, styles.directionContainerLeft]}>
        <Text style={styles.directionText}>Swipe to unlock</Text>
      </View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    borderWidth: 5,
    borderColor: '#5F73F1',
    borderBottomColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  directionContainer: {
    height: 80,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 6,
    backgroundColor: 'red',
    position: 'absolute',
  },
});
