import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Card from './Card/Card';
import data from './data';

const CreditCards = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <Text>CreditCard</Text>
        <View style={styles.list}>
          {data.map(card => (
            <Card
              date={card.date}
              cardNumber={card.cardNumber}
              bankIcon={card.bankIcon}
              chipIcon={card.chipIcon}
              person={card.person}
              background={card.background}
            />
          ))}
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
