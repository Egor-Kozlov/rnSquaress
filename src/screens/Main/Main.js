import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ServicesList from './components/ServicesList/ServicesList';
import Header from '../../components/Header/Header';
import Popular from './components/Popular/Popular';
import News from './components/News/News';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

const Main = () => {
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.mainContainer}>
      <Header />
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <ServicesList />
        <Popular />
        <News />
      </Animated.ScrollView>
    </View>
  );
};

export default Main;
