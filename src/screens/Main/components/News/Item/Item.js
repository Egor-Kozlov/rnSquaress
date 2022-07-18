import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import EyeIcon from './icons/eye-icon.svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Item = ({title, date, author, image}) => {
  const [isOpen, setIsOpen] = useState(false);

  const animation = useSharedValue({height: 60});

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, {
        duration: 400,
      }),
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container]}
      onPress={() => {
        animation.value = {height: isOpen ? 60 : 150};
        setIsOpen(!isOpen);
      }}>
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={[styles.content]}>
          <Text numberOfLines={1} style={styles.title}>
            {author}
          </Text>
          <Animated.View style={[styles.descriptionContainer, animationStyle]}>
            <Text
              numberOfLines={isOpen ? 8 : setTimeout(() => 3, 400)}
              style={styles.description}>
              {title}
            </Text>
          </Animated.View>
          <View style={styles.counterContainer}>
            <EyeIcon />
            <Text style={styles.counter}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Item);
