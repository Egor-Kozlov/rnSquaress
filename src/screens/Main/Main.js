import {View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import Popular from '../../components/Popular/Popular';
import News from '../../components/News/News';
import Books from '../../components/Books/Books';
import ServicesList from '../../components/ServicesList/ServicesList';
import Animated from 'react-native-reanimated';
import useHeaderScroll from '../../hooks/useHeaderScroll';
import {useDispatch} from 'react-redux';
import {changeScreen} from '../../store/slices/currentScreen';

const Main = ({navigation, scrollHandler, scrollRef}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScreen('Main'));
  }, []);

  return (
    <View style={styles.mainContainer}>
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
