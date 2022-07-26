import {View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import ServicesList from './components/ServicesList/ServicesList';
import Header from '../../components/Header/Header';
import Popular from './components/Popular/Popular';
import News from './components/News/News';
import Books from './components/Books/Books';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedProps,
  useDerivedValue,
  useAnimatedRef,
  scrollTo,
} from 'react-native-reanimated';

const Main = () => {
  const scrollRef = useAnimatedRef();
  const translationY = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => translationY);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  useDerivedValue(() => {
    scrollTo(scrollRef, 0, translationY.value, true);
  });

  const scrollToPosition = y => {
    translationY.value = y;
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        animatedProps={animatedProps}
        scrollToPosition={scrollToPosition}
      />
      <Animated.ScrollView
        style={styles.scroll}
        onScroll={scrollHandler}
        ref={scrollRef}
        scrollEventThrottle={16}>
        <ServicesList />
        <Popular />
        <News />
        <Books />
      </Animated.ScrollView>
    </View>
  );
};

export default Main;
