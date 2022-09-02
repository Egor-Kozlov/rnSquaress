import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Card from './Card/Card';

const CreditCards = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <Text>CreditCard</Text>
        <View style={styles.list}>
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreditCards;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingTop: 50,
  },
  list: {
    width: '100%',
    padding: 30,
  },
});
