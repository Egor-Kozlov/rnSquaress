import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import LocationIcon from '../../../assets/icons/location-icon';
import PersonIcon from '../../../assets/icons/person-icon.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';

const Header = ({animatedProps, scrollToPosition}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [searchVariants, setSearchVariants] = useState([]);
  const newsFromStore = useSelector(state => state.news);
  const booksFromStore = useSelector(state => state.books);
  const componentsScrollPositions = useSelector(
    state => state.componentsPosition.value,
  );

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

  useEffect(() => {
    // console.log(booksFromStore);
    if (isFocusInput && inputValue.length > 1) {
      console.log('componentsScrollPositions: ', componentsScrollPositions);
      const searchableValue = inputValue.toLowerCase();
      const findRelevantItems = [];

      const findNews = () => {
        const findRelevantNews = newsFromStore.value.reduce((acc, news) => {
          const {author, description} = news;
          if (author.toLowerCase().includes(searchableValue)) {
            acc.push({
              relevantString: author,
              located: 'news',
              finderParameter: 'author',
            });
          }
          if (description.toLowerCase().includes(searchableValue)) {
            acc.push({
              relevantString: description,
              located: 'news',
              finderParameter: 'description',
            });
          }
          return acc;
        }, []);
        return findRelevantNews;
      };
      const findBooks = () => {
        const findRelevantBooks = booksFromStore.value.reduce((acc, book) => {
          const {artistName, name} = book;
          if (artistName.toLowerCase().includes(searchableValue)) {
            acc.push({
              relevantString: artistName,
              located: 'books',
              finderParameter: 'artistName',
            });
          }
          if (name.toLowerCase().includes(searchableValue)) {
            acc.push({
              relevantString: name,
              located: 'books',
              finderParameter: 'name',
            });
          }
          return acc;
        }, []);
        return findRelevantBooks;
      };
      findNews();
      setSearchVariants([...findNews(), ...findBooks()]);
    }
  }, [isFocusInput, inputValue, newsFromStore, booksFromStore]);

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
          {inputValue.length > 1 && isFocusInput && searchVariants.length >= 1 && (
            <View style={[styles.searchList]}>
              {searchVariants.map((item, index) => (
                <TouchableOpacity
                  key={item.relevantString}
                  onPress={() => {
                    setIsFocusInput(false);
                    setInputValue('');
                    Keyboard.dismiss();
                    scrollToPosition(componentsScrollPositions[item.located]);
                  }}
                  style={[
                    styles.searchItem,
                    index === 0 && styles.firstItem,
                    index === searchVariants.length - 1 && styles.lastItem,
                  ]}>
                  <Text
                    style={[
                      styles.searchItemTitle,
                      // styles.searchItemTitleHighlight,
                    ]}>
                    {item.relevantString}
                  </Text>
                  <Text
                    style={
                      styles.searchItemLocation
                    }>{`in ${item.located}`}</Text>
                </TouchableOpacity>
              ))}
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
