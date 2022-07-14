import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';

const Item = ({item}) => {
  const [itemCircle, setItemCircle] = useState(false);

  //animated border radius for popular items on press
  const animatedBorderRadius = useRef(new Animated.Value(0)).current;

  const animatedBorderRadiusOnPress = () => {
    setItemCircle(!itemCircle);
    Animated.timing(animatedBorderRadius, {
      toValue: itemCircle ? 0 : 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={animatedBorderRadiusOnPress}
      style={[
        styles.item,
        {backgroundColor: item.color},
        {
          borderRadius: animatedBorderRadius.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 100],
          }),
        },
        //   index === 0 ? styles.itemBorderLeft : null,
        //   index === 1 ? styles.itemBorderRight : null,
      ]}
      key={item.title}>
      <View style={styles.itemIcon}>{item.icon}</View>
      <Text
        style={[
          styles.itemSubtitle,
          //   {
          //     fontSize: animatedBorderRadius.interpolate({
          //       inputRange: [0, 100],
          //       outputRange: [12, 16],
          //     }),
          //   },
        ]}>
        {item.category}
      </Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Item;
