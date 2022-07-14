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
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Animated.ScrollView>
        <ServicesList />
        <Popular />
      </Animated.ScrollView>
    </View>
  );
};

export default Main;
