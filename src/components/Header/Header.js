import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import React from 'react';
import styles from './styles';
import LocationIcon from './icons/location-icon.svg';
import PersonIcon from './icons/person-icon.svg';
import SearchIcon from './icons/search-icon.svg';

const Header = ({animatedProps}) => {
  // console.log('animatedProps: ', animatedProps.initial.value.value);

  const animatedScrollStyle = useAnimatedStyle(() => {
    const transform = interpolate(
      animatedProps.initial.value.value,
      [-300, 0, 140, Infinity],
      [170, 170, 100, 110],
      'clamp',
    );
    return {
      height: transform,
    };
  });

  const animatedFade = useAnimatedStyle(() => {
    const fade = interpolate(
      animatedProps.initial.value.value,
      [-300, 0, 100, Infinity],
      [1, 1, 0, 0],
      'clamp',
    );
    return {
      opacity: fade,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedScrollStyle]}>
      <View style={styles.content}>
        <TouchableOpacity>
          <LocationIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Логотип</Text>
        <TouchableOpacity>
          <PersonIcon />
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.inputContainer, animatedFade]}>
        <TextInput
          style={styles.input}
          placeholder="Поиск мест и событий"
          onBlur={() => Keyboard.dismiss()}
        />
        <SearchIcon style={styles.searchIcon} />
      </Animated.View>
    </Animated.View>
  );
};

export default Header;
