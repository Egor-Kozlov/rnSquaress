import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ArrowIcon from './icons/arrow-icon.svg';

const Title = ({title, arrowIcon, onPressFunc}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {arrowIcon && <ArrowIcon />}
    </TouchableOpacity>
  );
};

export default Title;
