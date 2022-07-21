import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Title from '../../../../components/Title/Title';
import WhiteBox from './components/WhiteBox';
import BookItem from './components/BookItem';
import GenreItem from './components/GenreItem';

const Posters = () => {
  const [data, setData] = useState();
  const [visibleBooks, setVisibleBooks] = useState();
  const [isLoading, setIsLoading] = useState();
  const [pickedGenres, setPickedGenres] = useState([]);

  const request = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://rss.applemarketingtools.com/api/v2/us/books/top-paid/50/books.json',
    );
    const json = await response.json();
    console.log(json);
    setData(json);
    setIsLoading(false);
  };

  const DATA = {
    feed: {
      title: 'Top Paid',
      id: 'https://rss.applemarketingtools.com/api/v2/us/books/top-paid/2/books.json',
      author: {name: 'Apple', url: 'https://www.apple.com/'},
      links: [
        {
          self: 'https://rss.applemarketingtools.com/api/v2/us/books/top-paid/2/books.json',
        },
      ],
      copyright: 'Copyright © 2022 Apple Inc. All rights reserved.',
      country: 'us',
      icon: 'https://www.apple.com/favicon.ico',
      updated: 'Thu, 21 Jul 2022 11:41:37 +0000',
      results: [
        {
          artistName: 'Daniel Silva',
          id: '1590846416',
          name: 'Portrait of an Unknown Woman',
          releaseDate: '2022-07-19',
          kind: 'books',
          artistId: '2024433',
          artistUrl: 'https://books.apple.com/us/author/daniel-silva/id2024433',
          artworkUrl100:
            'https://is3-ssl.mzstatic.com/image/thumb/Publication116/v4/47/63/fb/4763fb2c-1750-4ea8-d0b7-bba2069cc5b4/9780062834928.jpg/100x151bb.png',
          genres: [
            {
              genreId: '9032',
              name: 'Mysteries \u0026 Thrillers',
              url: 'https://itunes.apple.com/us/genre/id9032',
            },
            {
              genreId: '38',
              name: 'Books',
              url: 'https://itunes.apple.com/us/genre/id38',
            },
            {
              genreId: '9031',
              name: 'Fiction \u0026 Literature',
              url: 'https://itunes.apple.com/us/genre/id9031',
            },
            {
              genreId: '10039',
              name: 'Action \u0026 Adventure',
              url: 'https://itunes.apple.com/us/genre/id10039',
            },
          ],
          url: 'https://books.apple.com/us/book/portrait-of-an-unknown-woman/id1590846416',
        },
        {
          artistName: 'Delia Owens',
          id: '1326615497',
          name: 'Where the Crawdads Sing',
          releaseDate: '2018-08-14',
          kind: 'books',
          artistId: '427536076',
          artistUrl:
            'https://books.apple.com/us/author/delia-owens/id427536076',
          artworkUrl100:
            'https://is5-ssl.mzstatic.com/image/thumb/Publication122/v4/cc/ac/7f/ccac7fee-c351-0c7b-a3da-7398fea68628/9780735219113.d.jpg/100x150bb.png',
          genres: [
            {
              genreId: '10049',
              name: 'Literary',
              url: 'https://itunes.apple.com/us/genre/id10049',
            },
            {
              genreId: '38',
              name: 'Books',
              url: 'https://itunes.apple.com/us/genre/id38',
            },
            {
              genreId: '9031',
              name: 'Fiction \u0026 Literature',
              url: 'https://itunes.apple.com/us/genre/id9031',
            },
          ],
          url: 'https://books.apple.com/us/book/where-the-crawdads-sing/id1326615497',
        },
      ],
    },
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

  const renderGenres = ({item}) => {
    return <GenreItem name={item.name} />;
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Title title="Афиша" arrowIcon />
        </View>
        {data && (
          <FlatList
            style={styles.genresList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={renderGenres}
            keyExtractor={item => item.name}
            data={data.feed.results}
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
        {data && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.booksList}
            data={data.feed.results}
            renderItem={renderBooks}
            keyExtractor={item => item.id}
            onEndReached={request}
          />
        )}
      </View>
    </View>
  );
};

export default Posters;
