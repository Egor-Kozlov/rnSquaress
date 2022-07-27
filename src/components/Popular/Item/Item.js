import React from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';
import useAnimatedItem from './useAnimatedItem';

const Item = ({item, itemBorderLeft, itemBorderRight}) => {
  const {
    animatedOnPress,
    animatedBorderRadiusStyle,
    animatedLeftBorderRadiusStyle,
    animatedRightBorderRadiusStyle,
    animatedScale,
  } = useAnimatedItem(itemBorderLeft, itemBorderRight);

  return (
    <TouchableOpacity
      onPress={animatedOnPress}
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
