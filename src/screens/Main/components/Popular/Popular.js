import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import popularItems from './content';

const Popular = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Популярно на сайте</Text>
      <View style={styles.list}>
        {popularItems.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.item,
              {backgroundColor: item.color},
              index === 0 ? styles.itemBorderLeft : null,
              index === 1 ? styles.itemBorderRight : null,
            ]}
            key={item.title}>
            <Text style={styles.itemSubtitle}>{item.category}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Popular;
