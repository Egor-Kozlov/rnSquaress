import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Item = ({title, icon, onPressFunc, border}) => (
  <TouchableOpacity
    onPress={() => (onPressFunc ? onPressFunc() : null)}
    style={[
      styles.servicesItem,
      border && border === 'right' ? styles.borderRight : null,
      border && border === 'left' ? styles.borderLeft : null,
    ]}>
    {icon}
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Item;
