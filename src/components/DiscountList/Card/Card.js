import {Text, View, TouchableOpacity, Image} from 'react-native';
import TimeIcon from '../../../../assets/icons/time-icon.svg';
import BagIcon from '../../../../assets/icons/bag-icon.svg';
import React from 'react';
import styles from './styles';

const Card = ({title, date, price, image}) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.7}>
    <Image source={image} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <View style={styles.dateContainer}>
          <BagIcon />
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <TimeIcon />
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Card;
