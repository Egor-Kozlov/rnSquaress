import React from 'react';
import {
  useAnimatedRef,
  useSharedValue,
  useAnimatedProps,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

export default function useHeaderScroll() {
  const scrollRef = useAnimatedRef();
  const translationY = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => translationY);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const scrollToPosition = y => {
    scrollRef.current.scrollTo({x: 0, y: y, animated: true});
  };

  return {
    scrollRef,
    translationY,
    animatedProps,
    scrollHandler,
    scrollToPosition,
  };
}
