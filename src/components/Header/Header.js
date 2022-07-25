import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import styles from './styles';
import LocationIcon from './icons/location-icon.svg';
import PersonIcon from './icons/person-icon.svg';
import SearchIcon from './icons/search-icon.svg';

const Header = ({animatedProps}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [searchVariants, setSearchVariants] = useState(false);

  const animatedScrollStyle = useAnimatedStyle(() => {
    const transform = interpolate(
      animatedProps.initial.value.value,
      [-300, 0, 140, Infinity],
      [130, 130, 62, 62],
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

  const result = [
    'Первый',
    'Второй',
    'Третий',
    'Четвертый',
    'Четвертый',
    'Четвертый',
    'Четвертый',
  ];

  return (
    <Animated.View style={[styles.hiddenContainer, animatedScrollStyle]}>
      <View style={styles.container}>
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
            value={inputValue}
            onChangeText={setInputValue}
            onFocus={() => {
              setIsFocusInput(true);
            }}
            style={[styles.input, isFocusInput && styles.activeInput]}
            placeholder="Поиск мест и событий"
            onBlur={() => {
              Keyboard.dismiss();
              setIsFocusInput(false);
            }}
          />
          {inputValue && isFocusInput && (
            <View style={[styles.searchList]}>
              {result.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.searchItem,
                    index === 0 && styles.firstItem,
                    index === result.length - 1 && styles.lastItem,
                  ]}>
                  <Text style={styles.searchItemTitle}>{item}</Text>
                </TouchableOpacity>
              ))}
              {/* <TouchableOpacity style={[styles.searchItem]}>
                <Text style={styles.searchItemTitle}>Some result...</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.searchItem]}>
                <Text style={styles.searchItemTitle}>Some result...</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.searchItem]}>
                <Text style={styles.searchItemTitle}>Some result...</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.searchItem]}>
                <Text style={styles.searchItemTitle}>Some result...</Text>
              </TouchableOpacity> */}
            </View>
          )}
          <SearchIcon style={styles.searchIcon} />
        </Animated.View>
      </View>
      <View style={styles.hiddenSafeAreaView} />
    </Animated.View>
  );
};

export default Header;
