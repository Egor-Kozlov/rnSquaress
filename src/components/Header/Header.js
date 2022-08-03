import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  FlatList,
  Platform,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import LocationIcon from '../../../assets/icons/location-icon';
import PersonIcon from '../../../assets/icons/person-icon.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';
import MenuIcon from '../../../assets/icons/menu-icon.svg';
import BlueSearchIcon from '../../../assets/icons/blueSearch-icon.svg';
import highlightText from '../../modules/highlightText';
import searchNews from '../../services/searchNews';
import searchBooks from '../../services/searchBooks';

const Header = ({animatedProps, scrollToPosition, setDisableScroll}) => {
  const [showAddIcons, setShowAddIcons] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [searchVariants, setSearchVariants] = useState([]);
  const newsFromStore = useSelector(state => state.news);
  const booksFromStore = useSelector(state => state.books);
  const componentsScrollPositions = useSelector(
    state => state.componentsPosition.value,
  );

  const currentScreen = useSelector(state => state.currentScreen.value);

  //header scroll animations
  const animatedScrollStyle = useAnimatedStyle(() => {
    const transform =
      currentScreen === 'Main'
        ? interpolate(
            animatedProps.initial.value.value,
            [-300, 0, 140, Infinity],
            [130, 130, 62, 62],
            'clamp',
          )
        : withTiming(62, {
            duration: 300,
          });
    return {
      height: transform,
    };
  });

  const animatedFade = useAnimatedStyle(() => {
    const fade =
      currentScreen === 'Main'
        ? interpolate(
            animatedProps.initial.value.value,
            [-300, 0, 70, Infinity],
            [1, 1, 0, 0],
            'clamp',
          )
        : withTiming(0, {
            duration: 200,
            easing: Easing.out(Easing.ease),
          });
    return {
      opacity: fade,
    };
  });

  const animatedLocationIconPosition = useAnimatedStyle(() => {
    const iconPosition =
      currentScreen === 'Main'
        ? withTiming(0, {
            duration: 300,
            easing: Easing.out(Easing.ease),
          })
        : withTiming(48, {
            duration: 300,
            easing: Easing.out(Easing.ease),
          });
    return {left: iconPosition};
  });

  const animatedFadeIcon = useAnimatedStyle(() => {
    const fade =
      currentScreen === 'Main'
        ? withTiming(0, {
            duration: 300,
            easing: Easing.out(Easing.ease),
          })
        : withTiming(1, {
            duration: 800,
            easing: Easing.out(Easing.ease),
          });
    return {opacity: fade};
  });

  const renderSearchItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        key={item.stringBeforeSearchableValue}
        onPress={() => {
          scrollToPosition(componentsScrollPositions[item.located]);
          setIsFocusInput(false);
          setDisableScroll(false);
          setInputValue('');
          Keyboard.dismiss();
        }}
        style={[
          styles.searchItem,
          index === 0 && styles.firstItem,
          index === searchVariants.length - 1 && styles.lastItem,
        ]}>
        <View style={styles.searchItemTitle}>
          <Text style={styles.searchItemTitle}>
            {item.stringBeforeSearchableValue}
            {highlightText(
              item.searchableValue,
              styles.searchItemTitleHighlight,
            )}
            {''}
            {item.stringAfterSearchableValue}
          </Text>
        </View>
        <Text style={styles.searchItemLocation}>{`in ${item.located}`}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (isFocusInput && inputValue.length > 1) {
      const searchableValue = inputValue.toLowerCase();

      setSearchVariants([
        ...searchNews(newsFromStore.value, searchableValue),
        ...searchBooks(booksFromStore.value, searchableValue),
      ]);
    }
  }, [
    isFocusInput,
    inputValue,
    newsFromStore,
    booksFromStore,
    componentsScrollPositions,
  ]);

  //for full cycle menu icon animation, when you back to main screen
  useEffect(() => {
    if (currentScreen === 'Main') {
      setTimeout(() => {
        setShowAddIcons(false);
      }, 300);
      scrollToPosition(0);
    } else {
      setShowAddIcons(true);
    }
  }, [currentScreen, scrollToPosition]);

  return (
    <Animated.View style={[styles.hiddenContainer, animatedScrollStyle]}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Animated.View style={[styles.section, styles.leftSection]}>
            {showAddIcons && (
              <Animated.View style={animatedFadeIcon}>
                <TouchableOpacity>
                  <MenuIcon />
                </TouchableOpacity>
              </Animated.View>
            )}
            <Animated.View
              style={[styles.locationIcon, animatedLocationIconPosition]}>
              <TouchableOpacity>
                <LocationIcon />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Text style={styles.title}>Логотип</Text>
          <View style={[styles.section, styles.rightSection]}>
            <Animated.View style={animatedFadeIcon}>
              <TouchableOpacity>
                <BlueSearchIcon />
              </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity style={styles.personIcon}>
              <PersonIcon />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View style={[styles.inputContainer, animatedFade]}>
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            onFocus={() => {
              setIsFocusInput(true);
              setDisableScroll(true);
            }}
            style={[styles.input, isFocusInput && styles.activeInput]}
            placeholder="Поиск мест и событий"
            onBlur={() => {
              Keyboard.dismiss();
              setIsFocusInput(false);
              setDisableScroll(false);
            }}
          />
          <SearchIcon style={styles.searchIcon} />
          {inputValue.length > 1 && isFocusInput && searchVariants.length >= 1 && (
            <View
              style={[
                styles.listContainer,
                Platform.OS === 'android' && {overflow: 'hidden'},
              ]}>
              <FlatList
                contentContainerStyle={styles.searchFlatList}
                style={styles.searchFlatList}
                data={searchVariants}
                extraData={searchVariants}
                keyExtractor={(item, index) =>
                  item.stringBeforeSearchableValue + index
                }
                renderItem={(item, index) => renderSearchItem(item, index)}
              />
            </View>
          )}
        </Animated.View>
      </View>
      <View style={styles.hiddenSafeAreaView} />
    </Animated.View>
  );
};

export default Header;
