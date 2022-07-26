import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNews, clearNews} from '../../../../store/slices/news';
import {addComponentsPosition} from '../../../../store/slices/componentsPosition';
import styles from './styles';
import Title from '../../../../components/Title/Title';
import Item from './Item/Item';
import convertDate from '../../../../modules/convertDate';

const keyApi = '6e58d54dec8049669945889329fb8d82';

const News = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const request = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=2&page=${currentPage}&apiKey=${keyApi}`,
    );
    const json = await response.json();
    dispatch(addNews(json.articles));
    setData([...data, ...json.articles]);
    setCurrentPage(currentPage + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    request();

    return () => {
      dispatch(clearNews());
    };
  }, []);

  return (
    <View
      style={styles.container}
      onLayout={event => {
        const {layout} = event.nativeEvent;
        dispatch(
          addComponentsPosition({componentName: 'news', position: layout.y}),
        );
      }}>
      <View style={styles.titleContainer}>
        <Title title="Новости" arrowIcon={true} onPressFunc={() => {}} />
      </View>
      <View style={styles.list}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <Item
              key={item.title}
              title={item.description}
              date={convertDate(item.publishedAt)}
              author={item.author}
              image={item.urlToImage}
            />
          ))
        ) : (
          <Text>Нет данных</Text>
        )}
      </View>
      <TouchableOpacity onPress={request} style={styles.readMoreBtn}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.readMoreText}>Читать еще</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default News;
