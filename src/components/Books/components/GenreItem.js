import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const GenreItem = ({name, handleGenrePress, isChecked}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleGenrePress(name);
      }}
      activeOpacity={0.5}
      style={[styles.item, isChecked ? {backgroundColor: '#5F73F1'} : null]}>
      <Text style={[styles.text, isChecked ? {color: '#fafafa'} : null]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(GenreItem);

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
