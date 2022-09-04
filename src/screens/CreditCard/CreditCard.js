import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, {useState, useCallback} from 'react';
import Card from './Card/Card';
import data from './data';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  Easing,
} from 'react-native-reanimated';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';

const CreditCards = () => {
  const [isShowCards, setIsShowCards] = useState(false);

  useCallback(() => {
    setIsShowCards();
  }, []);

  const rotate = useDerivedValue(() => {
    return withTiming(isShowCards ? 17 : 0, {
      duration: 200,
      easing: Easing.linear,
    });
  });

  const positionX = useDerivedValue(() => {
    return withTiming(isShowCards ? 13 : 10, {
      duration: 200,
      easing: Easing.linear,
    });
  });

  const positionY = useDerivedValue(() => {
    return withTiming(isShowCards ? 46 : 10, {
      duration: 200,
      easing: Easing.linear,
    });
  });

  return (
    <Pressable
      style={styles.mainContainer}
      onPressIn={() => setIsShowCards(false)}>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleContainer}>
          <ServiceTitle title={'Ваши карты:'} count={data.length} />
        </View>
        <View style={styles.list}>
          {data.map((card, index) => {
            const cardDegStyle = useAnimatedStyle(() => {
              return {
                transform: [
                  {rotate: `${rotate.value * index} deg`},
                  {translateX: -(index * positionX.value)},
                  {translateY: index * positionY.value},
                ],
                // top: index * position.value,
                // left: -(index * position.value),
              };
            });
            return (
              <Animated.View
                key={card.cardNumber}
                style={[cardDegStyle, styles.cardContainer]}>
                <Card
                  date={card.date}
                  cardNumber={card.cardNumber}
                  bankIcon={card.bankIcon}
                  chipIcon={card.chipIcon}
                  person={card.person}
                  background={card.background}
                  setIsShowCards={setIsShowCards}
                />
              </Animated.View>
            );
          })}
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
    // backgroundColor: 'gray',
    width: '100%',
    height: 400,
    margin: 50,
    position: 'relative',
  },
  cardContainer: {
    position: 'absolute',
  },
});
