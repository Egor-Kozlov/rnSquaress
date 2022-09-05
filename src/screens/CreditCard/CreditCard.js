import {StyleSheet, View, ScrollView, Pressable} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import data from './data';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import AnimatedCard from './Card/AnimatedCard';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';

const CreditCards = () => {
  const [isShowCards, setIsShowCards] = useState(false);
  const [currentCardList, setCurrentCardList] = useState([]);
  const [currentPickedCard, setCurrentPickedCard] = useState(null);

  // const dispatch = useDispatch();

  useCallback(() => {
    setIsShowCards();
  }, []);

  return (
    <Pressable
      style={styles.mainContainer}
      onPressIn={() => setIsShowCards(false)}>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleContainer}>
          <ServiceTitle title={'Ваши карты:'} count={data.length} />
        </View>
        <View style={styles.list}>
          {data.map((card, index) => (
            <AnimatedCard
              isShowCards={isShowCards}
              card={card}
              index={index}
              setIsShowCards={setIsShowCards}
              key={card.id}
              setCurrentPickedCard={setCurrentPickedCard}
            />
          ))}
        </View>
      </ScrollView>
    </Pressable>
  );
};

export default CreditCards;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingTop: 50,
  },
  titleContainer: {
    paddingLeft: 20,
  },
  list: {
    width: '100%',
    height: 400,
    margin: 50,
    position: 'relative',
  },
});
