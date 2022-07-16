import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import useHideKeyboard from '../../../../../hooks/useHideKeyboard';
import styles from './styles';

const Item = ({title, icon, onPressFunc, border, disableBorderTop}) => (
  <TouchableOpacity
    onPress={() => (onPressFunc ? onPressFunc() : null)}
    onPressIn={useHideKeyboard}
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
