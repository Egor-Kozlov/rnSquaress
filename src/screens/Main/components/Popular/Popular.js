import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import popularItems from './content';
import Item from './Item/Item';

const Popular = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Популярно на сайте</Text>
      <View style={styles.list}>
        {popularItems.map((item, index) => (
          <Item key={item.title} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Popular;
