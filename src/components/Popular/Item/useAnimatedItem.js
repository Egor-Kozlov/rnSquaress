import {Animated} from 'react-native';
import {useState, useRef} from 'react';

const useAnimatedItem = () => {
  const [itemCircle, setItemCircle] = useState(false);

  const animateState = {
    start: 0,
    end: 100,
  };
  const inputRange = [animateState.start, animateState.end];
  const animatedValue = useRef(new Animated.Value(animateState.start)).current;

  const animatedOnPress = () => {
    setItemCircle(!itemCircle);
    Animated.timing(animatedValue, {
      toValue: itemCircle ? animateState.start : animateState.end,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const animatedBorderRadiusStyle = {
    borderRadius: animatedValue.interpolate({
      inputRange,
      outputRange: [100, 0],
      extrapolate: 'clamp',
    }),
  };

  const animatedLeftBorderRadiusStyle = {
    borderTopLeftRadius: animatedValue.interpolate({
      inputRange,
      outputRange: [100, 37],
      extrapolate: 'clamp',
    }),
  };

  const animatedRightBorderRadiusStyle = {
    borderTopRightRadius: animatedValue.interpolate({
      inputRange,
      outputRange: [100, 37],
      extrapolate: 'clamp',
    }),
  };

  const animatedScale = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange,
          outputRange: [0.7, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return {
    animatedOnPress,
    animatedBorderRadiusStyle,
    animatedLeftBorderRadiusStyle,
    animatedRightBorderRadiusStyle,
    animatedScale,
  };
};

export default useAnimatedItem;
