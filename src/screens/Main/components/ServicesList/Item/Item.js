import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import hideKeyboard from '../../../../../hooks/hideKeyboard';
import styles from './styles';

const Item = ({title, icon, onPressFunc, border, disableBorderTop}) => (
  <TouchableOpacity
    onPress={() => (onPressFunc ? onPressFunc() : null)}
    onPressIn={hideKeyboard}
    style={[
      styles.servicesItem,
      border && border === 'right' ? styles.borderRight : null,
      border && border === 'left' ? styles.borderLeft : null,
      disableBorderTop ? styles.disableBorderTop : null,
    ]}>
    {icon}
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Item;
