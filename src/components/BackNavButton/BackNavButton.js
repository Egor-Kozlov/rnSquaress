import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ArrowIcon from '../../../assets/icons/arrow-icon';

const BackNavButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => navigation.goBack()}>
        <View style={styles.circleContainer}>
          <ArrowIcon />
        </View>
        <Text style={styles.text}>Салоны красоты</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackNavButton;
