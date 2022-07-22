import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import EyeIcon from './icons/eye-icon.svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';

const Item = ({title, date, author, image}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [countOfLine, setCountOfLine] = useState(3);

  const animation = useSharedValue({height: 60});
  const animationBlur = useSharedValue(5);

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, {
        duration: 400,
      }),
    };
  });

  const timing = () => {
    setTimeout(() => {
      setCountOfLine(3);
    }, 400);
  };

  useEffect(() => {
    if (isOpen) {
      setCountOfLine(8);
    } else {
      timing();
    }

    return () => {
      clearTimeout(timing);
    };
  }, [isOpen]);

  return (
    <TouchableOpacity
      activeOpacity={Platform.OS === 'ios' ? 0.6 : 1}
      style={styles.container}
      onPress={() => {
        animation.value = {height: isOpen ? 60 : 150};
        animationBlur.value = isOpen ? 5 : 0;
        setIsOpen(!isOpen);
      }}>
      <View style={styles.item}>
        <Image
          blurRadius={isOpen ? 5 : 0}
          style={[styles.image, isOpen ? {opacity: 0.5, color: 'black'} : null]}
          source={{uri: image}}
          onLoadEnd={() => {
            setIsImageLoading(false);
          }}
        />
        <ActivityIndicator
          style={styles.indicator}
          size="small"
          color="#706f6f"
          animating={isImageLoading}
        />
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {author}
          </Text>
          <Animated.View style={[styles.descriptionContainer, animationStyle]}>
            <Text numberOfLines={countOfLine} style={styles.description}>
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
