import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CardBackground from '../../../../assets/pictures/creditCard/cardBackground-1.svg';
import ChipIcon from '../../../../assets/icons/creditCard/chip.svg';
import BankIcon from '../../../../assets/icons/creditCard/visa.svg';

const Card = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <CardBackground style={styles.background} />
      <View style={styles.topContainer}>
        <ChipIcon />
        <BankIcon />
      </View>
      <Text style={styles.cardNumber}>**** **** **** 2345</Text>
      <View style={styles.information}>
        <View style={styles.holderNameContainer}>
          <Text style={styles.holderName}>Card Holder name</Text>
          <Text style={styles.personName}>Noman Manzoor</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.holderName}>Expiry Date</Text>
          <Text style={styles.personName}>02/30</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 299,
    height: 198,
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 28,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 6.65,

    elevation: 7,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    position: 'absolute',
    top: 77,
    left: 20,
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  holderName: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  personName: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
  },
});
