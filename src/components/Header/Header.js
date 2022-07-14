import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  StyleSheet,
} from 'react-native';
import React from 'react';
// import styles from './styles';
import LocationIcon from './icons/location-icon.svg';
import PersonIcon from './icons/person-icon.svg';
import SearchIcon from './icons/search-icon.svg';

const Header = () => {
  return (
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
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Поиск мест и событий" />
        <SearchIcon style={styles.searchIcon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    // backgroundColor: 'green',
    paddingBottom: 15,
    shadowColor: '#5F73F1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 15.27,

    elevation: 10,
    backgroundColor: '#fff',
  },
  title: {
    color: '#5F73F1',
    fontSize: 34,
    fontFamily: 'Montserrat-ExtraBold',
    lineHeight: 41,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#F6F6F6',
    height: 40,
    margin: 12,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 20,
  },
  searchIcon: {
    position: 'absolute',
    top: 24,
    left: 30,
  },
});
