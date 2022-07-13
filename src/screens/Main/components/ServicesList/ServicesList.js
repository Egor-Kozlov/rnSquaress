import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import entertainments from './content/entertainments';
import Item from './Item/Item';
import MoreIcon from './icons/more-icon.svg';

const ServicesList = () => {
  const [visibleService, setVisibleService] = useState([]);

  const showFirstFiveServices = () => {
    setVisibleService(entertainments.slice(0, 5));
  };

  const onShowAllServices = () => {
    setVisibleService(entertainments);
  };

  useEffect(() => {
    showFirstFiveServices();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.servicesList}>
        {visibleService.map((item, index) => (
          <Item
            key={item.title}
            title={item.title}
            icon={item.icon}
            onPressFunc={showFirstFiveServices}
            border={index === visibleService.length - 2 ? 'left' : null}
          />
        ))}
        {visibleService && visibleService.length !== entertainments.length ? (
          <Item
            title={'Еще'}
            icon={<MoreIcon />}
            onPressFunc={onShowAllServices}
            border={'right'}
          />
        ) : (
          <Item border={'right'} />
        )}
      </View>
    </View>
  );
};

export default ServicesList;
