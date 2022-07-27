import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import popularItems from './content';
import Item from './Item/Item';
import Title from '../Title/Title';

const Popular = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title title="Популярное на сайте" />
      </View>
      <View style={styles.list}>
        {popularItems.map((item, index) => (
          <Item
            key={item.title}
            item={item}
            itemBorderLeft={index === 0 ? true : null}
            itemBorderRight={index === 1 ? true : null}
          />
        ))}
      </View>
    </View>
  );
};

export default Popular;
