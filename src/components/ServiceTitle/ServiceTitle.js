import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ServiceTitle = ({title, count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export default ServiceTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 17,
    color: '#858585',
    marginRight: 10,
  },
  count: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 17,
    color: 'rgba(133, 133, 133, 0.46)',
  },
});
