import {View, Text} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import Animated from 'react-native-reanimated';
import styles from './styles';
import {changeScreen} from '../../store/slices/currentScreen';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import ServiceCart from '../../components/ServiceCart/ServiceCart';
import ServicesList from '../../components/ServicesList/ServicesList';
import BackNavButton from '../../components/BackNavButton/BackNavButton';
import HorizontalCheckbox from '../../components/HorizontalCheckbox/HorizontalCheckbox';

const Health = ({navigation, scrollHandler, scrollRef}) => {
  const dispatch = useDispatch();

  //set current screen to store
  const setCurrentScreenToStore = useCallback(() => {
    dispatch(changeScreen('Health'));
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
        <BackNavButton />
        <View style={styles.HorizontalCheckboxContainer}>
          <HorizontalCheckbox
            firstPosition="Все места"
            secondPosition="С онлайн-записью"
            mainColor="#5F73F1"
            secondaryColor="#FFFFFF"
          />
        </View>
        <ServicesList />
        <ServiceCart />
        <ServiceCart />
      </Animated.ScrollView>
    </View>
  );
};

export default Health;
