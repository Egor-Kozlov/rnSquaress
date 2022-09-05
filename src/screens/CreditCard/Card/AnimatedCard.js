import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from './Card';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  Easing,
} from 'react-native-reanimated';

const AnimatedCard = ({isShowCards, index, card, setIsShowCards}) => {
  const [cardWasClicked, setCardWasClicked] = useState(false);

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

  const scale = useDerivedValue(() => {
    return withTiming(cardWasClicked ? 1.2 : 1, {
      duration: 600,
      easing: Easing.inOut(Easing.elastic(1)),
    });
  });

  const cardDegStyle = useAnimatedStyle(() => {
    return !cardWasClicked
      ? {
          transform: [
            {rotate: `${rotate.value * index} deg`},
            {translateX: -(index * positionX.value)},
            {translateY: index * positionY.value},
            {scale: scale.value},
          ],
        }
      : {
          transform: [
            {rotate: `${rotate.value} deg`},
            {
              translateX: withTiming(-7, {
                duration: 400,
                easing: Easing.linear,
              }),
            },
            {
              translateY: withTiming(260, {
                duration: 400,
                easing: Easing.linear,
              }),
            },
            {scale: scale.value},
          ],
        };
  });

  return (
    <Animated.View
      key={card.cardNumber}
      style={[cardDegStyle, styles.cardContainer]}>
      <TouchableOpacity
        activeOpacity={isShowCards ? 0.9 : 1}
        onPress={() => {
          isShowCards
            ? (setCardWasClicked(true), setIsShowCards(false))
            : setIsShowCards(true);
        }}>
        <Card
          date={card.date}
          cardNumber={card.cardNumber}
          bankIcon={card.bankIcon}
          chipIcon={card.chipIcon}
          person={card.person}
          background={card.background}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
  },
});
