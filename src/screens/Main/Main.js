import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import Popular from '../../components/Popular/Popular';
import News from '../../components/News/News';
import Books from '../../components/Books/Books';
import ServicesList from '../../components/ServicesList/ServicesList';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedProps,
  useAnimatedRef,
} from 'react-native-reanimated';

const Main = ({navigation}) => {
  const scrollRef = useAnimatedRef();
  const translationY = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => translationY);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const scrollToPosition = y => {
    scrollRef.current.scrollTo({x: 0, y: y, animated: true});
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
        <ServicesList navigation={navigation} />
        <Popular />
        <News />
        <Books />
      </Animated.ScrollView>
    </View>
  );
};

export default Main;
