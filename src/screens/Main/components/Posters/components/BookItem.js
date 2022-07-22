import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

//author
//title
//genre
//picture

const BookItem = ({picture, genre, name, author}) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.8}>
      <View style={styles.pictureContainer}>
        <Image source={{uri: picture}} style={styles.picture} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.genre}>
          {genre}
        </Text>
        <Text numberOfLines={3} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.author}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(BookItem);

const styles = StyleSheet.create({
  item: {
    width: 110,
    height: 220,
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pictureContainer: {
    width: '100%',
    height: 150,
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.62,
    elevation: 6,
  },
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  content: {
    paddingTop: 12,
  },
  genre: {
    marginBottom: 5,
    fontSize: 11,
    color: '#5499CA',
    fontFamily: 'Montserrat-Regular',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 7,
    lineHeight: 14,
  },
  author: {
    color: '#5499CA',
    fontFamily: 'Montserrat-Regular',
  },
});
