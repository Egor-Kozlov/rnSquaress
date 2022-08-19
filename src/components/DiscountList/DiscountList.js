import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Card from './Card/Card';
import discount from './content/content';

const DiscountList = () => {
  const renderCard = ({item}) => (
    <Card
      title={item.title}
      date={item.date}
      price={item.price}
      image={item.picture}
    />
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderCard}
      data={discount}
      keyExtractor={item => item.title}
    />
  );
};

export default DiscountList;
