import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  FlatList,
  Platform,
} from 'react-native';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import LocationIcon from '../../../assets/icons/location-icon';
import PersonIcon from '../../../assets/icons/person-icon.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';
import highlightText from '../../modules/highlightText';

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

  const renderSearchItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        key={item.stringBeforeSearchableValue}
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

      const findNews = () => {
        const findRelevantNews = newsFromStore.value.reduce((acc, news) => {
          const {author, description} = news;

          if (description.toLowerCase().includes(searchableValue)) {
            acc.push({
              // get string before searchableValue
              stringBeforeSearchableValue: description.slice(
                0,
                description.toLowerCase().indexOf(searchableValue),
              ),
              // get string after searchableValue
              stringAfterSearchableValue: description.slice(
                description.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              searchableValue: inputValue,

              located: 'news',
              finderParameter: 'description',
            });
          }

          if (author.toLowerCase().includes(searchableValue)) {
            acc.push({
              // get string before searchableValue
              stringBeforeSearchableValue: author.slice(
                0,
                author.toLowerCase().indexOf(searchableValue),
              ),
              // get string after searchableValue
              stringAfterSearchableValue: author.slice(
                author.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              searchableValue: author.slice(
                author.toLowerCase().indexOf(searchableValue),
                author.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              located: 'news',
              finderParameter: 'author',
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
              // get string before searchableValue
              stringBeforeSearchableValue: artistName.slice(
                0,
                artistName.toLowerCase().indexOf(searchableValue),
              ),
              // get string after searchableValue
              stringAfterSearchableValue: artistName.slice(
                artistName.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              searchableValue: artistName.slice(
                artistName.toLowerCase().indexOf(searchableValue),
                artistName.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              located: 'books',
              finderParameter: 'artistName',
            });
          }
          if (name.toLowerCase().includes(searchableValue)) {
            acc.push({
              // get string before searchableValue
              stringBeforeSearchableValue: name.slice(
                0,
                name.toLowerCase().indexOf(searchableValue),
              ),
              // get string after searchableValue
              stringAfterSearchableValue: name.slice(
                name.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              searchableValue: name.slice(
                name.toLowerCase().indexOf(searchableValue),
                name.toLowerCase().indexOf(searchableValue) +
                  searchableValue.length,
              ),
              located: 'books',
              finderParameter: 'name',
            });
          }
          return acc;
        }, []);
        return findRelevantBooks;
      };
      setSearchVariants([...findNews(), ...findBooks()]);
    }
  }, [
    isFocusInput,
    inputValue,
    newsFromStore,
    booksFromStore,
    componentsScrollPositions,
  ]);

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
            <View style={styles.listContainer}>
              <FlatList
                scrollEnabled={Platform.OS === 'ios' ? true : false}
                style={styles.searchList}
                data={searchVariants}
                extraData={searchVariants}
                keyExtractor={(item, index) =>
                  item.stringBeforeSearchableValue + index
                }
                renderItem={(item, index) => renderSearchItem(item, index)}
              />
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
