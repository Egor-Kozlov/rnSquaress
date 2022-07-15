import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';

const Item = ({item, itemBorderLeft, itemBorderRight}) => {
  const [itemCircle, setItemCircle] = useState(false);

  //animated border radius for popular items on press
  const animatedBorderRadius = useRef(new Animated.Value(0)).current;

  const animatedBorderRadiusOnPress = () => {
    setItemCircle(!itemCircle);
    Animated.timing(animatedBorderRadius, {
      toValue: itemCircle ? 0 : 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const animatedBorderRadiusStyle = {
    borderRadius: animatedBorderRadius.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    }),
  };

  const animatedLeftBorderRadiusStyle = {
    borderTopLeftRadius: animatedBorderRadius.interpolate({
      inputRange: [0, 100],
      outputRange: [37, 100],
      extrapolate: 'clamp',
    }),
  };

  const animatedRightBorderRadiusStyle = {
    borderTopRightRadius: animatedBorderRadius.interpolate({
      inputRange: [0, 100],
      outputRange: [37, 100],
      extrapolate: 'clamp',
    }),
  };

  const animatedScale = {
    transform: [
      {
        scale: animatedBorderRadius.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0.7],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      onPress={animatedBorderRadiusOnPress}
      style={[
        styles.item,
        {backgroundColor: item.color},
        animatedBorderRadiusStyle,
        itemBorderLeft && animatedLeftBorderRadiusStyle,
        itemBorderRight && animatedRightBorderRadiusStyle,
        animatedScale,
      ]}
      key={item.title}>
      <View style={styles.itemIcon}>{item.icon}</View>
      <Animated.Text style={[styles.itemSubtitle]}>
        {item.category}
      </Animated.Text>
      <Animated.Text style={[styles.itemTitle]}>{item.title}</Animated.Text>
    </TouchableOpacity>
  );
};

export default Item;
