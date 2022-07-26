import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addBooks, clearBooks} from '../../../../store/slices/books';
import {addComponentsPosition} from '../../../../store/slices/componentsPosition';
import styles from './styles';
import Title from '../../../../components/Title/Title';
import WhiteBox from './components/WhiteBox';
import BookItem from './components/BookItem';
import GenreItem from './components/GenreItem';
import useRequest from '../../../../hooks/useRequest';

const Books = () => {
  const {data, error, loading} = useRequest(
    'https://rss.applemarketingtools.com/api/v2/us/books/top-paid/50/books.json',
  );

  const dispatch = useDispatch();

  if (error) {
    console.log(error);
  }

  const [visibleBooks, setVisibleBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pickedGenres, setPickedGenres] = useState([]);

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

  useEffect(() => {
    if (visibleBooks.length > 0) {
      dispatch(addBooks(visibleBooks));
    } else {
      dispatch(clearBooks());
    }
  }, [visibleBooks, dispatch]);

  return (
    <View
      style={styles.container}
      onLayout={event => {
        const {layout} = event.nativeEvent;
        dispatch(
          addComponentsPosition({componentName: 'books', position: layout.y}),
        );
      }}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Title title="Афиша" arrowIcon />
        </View>
        {genres && (
          <FlatList
            style={styles.genresList}
            showsHorizontalScrollIndicator={false}
            extraData={[pickedGenres]}
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
            extraData={[pickedGenres]}
            horizontal
            style={styles.booksList}
            data={visibleBooks}
            renderItem={renderBooks}
            keyExtractor={item => item.id}
          />
        ) : (
          !loading && (
            <Text style={styles.noResultsText}>Нет подходящих книг</Text>
          )
        )}
        {loading && (
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color="#5F73F1"
          />
        )}
      </View>
    </View>
  );
};

export default Books;
