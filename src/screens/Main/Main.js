import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ServicesList from './components/ServicesList/ServicesList';
import Header from '../../components/Header/Header';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <ServicesList />
    </View>
  );
};

export default Main;
