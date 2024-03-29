import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({
  date,
  cardNumber,
  bankIcon,
  chipIcon,
  person,
  background,
  setIsShowCards,
  isShowCards,
}) => {
  return (
    <View
      // activeOpacity={isShowCards ? 0.9 : 1}
      style={styles.card}
      // onPress={() => setIsShowCards(true)}
    >
      <View style={styles.background}>{background}</View>
      <View style={styles.topContainer}>
        {chipIcon}
        {bankIcon}
      </View>
      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <View style={styles.information}>
        <View style={styles.holderNameContainer}>
          <Text style={styles.holderName}>Card Holder name</Text>
          <Text style={styles.personName}>
            {person.name} {person.surname}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.holderName}>Expiry Date</Text>
          <Text style={styles.personName}>
            {date.month}/{date.year}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Card);

const styles = StyleSheet.create({
  card: {
    width: 299,
    height: 198,
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 28,
    marginVertical: 10,
    // transform: [{rotate: '10deg'}],
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
