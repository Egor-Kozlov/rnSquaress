import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Animated from 'react-native-reanimated';
import styles from './styles';
import Popular from '../../components/Popular/Popular';
import News from '../../components/News/News';
import {changeScreen} from '../../store/slices/currentScreen';
import {useDispatch} from 'react-redux';

const Health = ({navigation, scrollHandler, scrollRef}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScreen('Health'));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Animated.ScrollView
        style={styles.scroll}
        onScroll={scrollHandler}
        ref={scrollRef}
        scrollEventThrottle={16}>
        <Popular />
        <News />
      </Animated.ScrollView>
    </View>
  );
};

export default Health;
