import {View} from 'react-native';
import React, {useEffect, useCallback} from 'react';
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
import {useRoute, useFocusEffect} from '@react-navigation/native';

const Main = ({navigation, scrollHandler, scrollRef}) => {
  const dispatch = useDispatch();

  //set current screen to store
  const setCurrentScreenToStore = useCallback(() => {
    dispatch(changeScreen('Main'));
  }, [dispatch]);

  //called when screen is focused
  useFocusEffect(() => {
    setCurrentScreenToStore();
  });

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
