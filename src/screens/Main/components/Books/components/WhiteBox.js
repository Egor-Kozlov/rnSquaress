import {StyleSheet, View} from 'react-native';
import React from 'react';

const WhiteBox = () => {
  return <View style={styles.box} />;
};

export default WhiteBox;

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 11,
  },
});
