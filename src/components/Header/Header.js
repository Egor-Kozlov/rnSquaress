import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
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
