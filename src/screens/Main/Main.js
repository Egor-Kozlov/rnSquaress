import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import ServicesList from './components/ServicesList/ServicesList';
import Header from '../../components/Header/Header';
import Popular from './components/Popular/Popular';
import News from './components/News/News';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <ServicesList />
        <Popular />
        <News />
      </ScrollView>
    </View>
  );
};

export default Main;
