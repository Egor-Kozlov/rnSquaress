import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles';
import Title from '../../../../components/Title/Title';
import WhiteBox from './components/WhiteBox';
import BookItem from './components/BookItem';
import GenreItem from './components/GenreItem';

const Posters = () => {
  const [data, setData] = useState();
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [genres, setGenres] = useState([]);
  const [pickedGenres, setPickedGenres] = useState([]);

  const request = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://rss.applemarketingtools.com/api/v2/us/books/top-paid/50/books.json',
    );
    const json = await response.json();
    console.log(json);
    setData(json);
    setVisibleBooks(json.feed.results);
    setIsLoading(false);
  };

  const renderBooks = ({item}) => {
    return (
      <BookItem
        author={item.artistName}
        name={item.name}
        genre={item.genres[0].name}
        picture={item.artworkUrl100}
      />
    );
  };

  const isGenrePicked = useCallback(
    genre => {
      return pickedGenres.includes(genre);
    },
    [pickedGenres],
  );

  const handleGenrePress = useCallback(
    genre => {
      if (isGenrePicked(genre)) {
        setPickedGenres(pickedGenres.filter(g => g !== genre));
      } else {
        setPickedGenres([...pickedGenres, genre]);
      }
    },
    [pickedGenres, isGenrePicked],
  );

  const renderGenres = ({item}) => {
    return (
      <GenreItem
        name={item}
        isChecked={isGenrePicked(item)}
        handleGenrePress={handleGenrePress}
      />
    );
  };

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (data) {
      const findUniqueGenres = () => {
        const uniqueGenres = [];
        data.feed.results.forEach(book => {
          book.genres.forEach(genre => {
            if (!uniqueGenres.includes(genre.name)) {
              uniqueGenres.push(genre.name);
            }
          });
        });
        return uniqueGenres;
      };
      setVisibleBooks(data.feed.results);
      setGenres(findUniqueGenres());
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (pickedGenres.length > 0) {
        const filteredBooks = data.feed.results.filter(book => {
          const booksGenres = book.genres.map(genre => genre.name);
          return pickedGenres.every(genre => booksGenres.includes(genre));
        });

        setVisibleBooks(filteredBooks);
      } else {
        setVisibleBooks(data.feed.results);
      }
    }
  }, [pickedGenres, data]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Title title="Афиша" arrowIcon />
        </View>
        {genres && (
          <FlatList
            style={styles.genresList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={renderGenres}
            keyExtractor={item => item}
            data={genres}
          />
        )}
      </View>
      <View style={styles.listingContainer}>
        <View style={styles.whiteBoxesList}>
          {Array(5)
            .fill(5)
            .map((item, index) => (
              <WhiteBox key={index} />
            ))}
        </View>
        {visibleBooks.length > 0 ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.booksList}
            data={visibleBooks}
            renderItem={renderBooks}
            keyExtractor={item => item.id}
            onEndReached={request}
          />
        ) : (
          <Text style={styles.noResults}>Нет результатов</Text>
        )}
      </View>
    </View>
  );
};

export default Posters;
