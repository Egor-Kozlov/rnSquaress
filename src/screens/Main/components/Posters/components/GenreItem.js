import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const GenreItem = ({name}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.item}>
      <Text style={styles.text}>{'Fiction \u0026 Literature'}</Text>
    </TouchableOpacity>
  );
};

export default GenreItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#d2d7f345',
    borderRadius: 25,
    marginRight: 14,
  },
  text: {
    color: '#B1B7DE',
  },
});
