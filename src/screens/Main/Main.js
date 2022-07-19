import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ServicesList from './components/ServicesList/ServicesList';
import Header from '../../components/Header/Header';
import Popular from './components/Popular/Popular';
import News from './components/News/News';
import Posters from './components/Posters/Posters';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedProps,
} from 'react-native-reanimated';

const Main = () => {
  const translationY = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => translationY);

  const scrollHandler = useAnimatedScrollHandler(event => {
    console.log(event.contentOffset.y);
    translationY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.mainContainer}>
      <Header animatedProps={animatedProps} />
      <Animated.ScrollView
        style={styles.scroll}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <ServicesList />
        <Popular />
        <News />
        <Posters />
      </Animated.ScrollView>
    </View>
  );
};

export default Main;
