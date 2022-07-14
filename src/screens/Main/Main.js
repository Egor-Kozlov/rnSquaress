import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import ServicesList from './components/ServicesList/ServicesList';
import Header from '../../components/Header/Header';
import Popular from './components/Popular/Popular';

const Main = () => {
  const HEADER_MAX_HEIGHT = 120; // Максимальная высота заголовка
  const HEADER_MIN_HEIGHT = 80; // Минимальная высота заголовка
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT; // Расстояние для прокрутки заголовка

  const scroll = useRef(new Animated.Value(0)).current;

  const translateHeader = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });
  const translateHeaderText = Animated.multiply(translateHeader, -1.5);
  const fadeOut = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.mainContainer}>
      <Header
        translateHeader={translateHeader}
        HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}>
        <ServicesList />
        <Popular />
      </Animated.ScrollView>
    </View>
  );
};

export default Main;
