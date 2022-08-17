import {View, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import styles from './styles';

const HorizontalCheckbox = ({
  firstPosition,
  secondPosition,
  mainColor,
  secondaryColor,
}) => {
  const [firstPositionChecked, setFirstPositionChecked] = useState(true);
  const checkBoxPosition = useDerivedValue(() =>
    withTiming(firstPositionChecked ? 1 : 0),
  );

  const animatedBlockPosition = useAnimatedStyle(() => {
    const transform = withTiming(firstPositionChecked ? '0%' : '50%', {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    });
    return {
      left: transform,
    };
  }, [firstPositionChecked]);

  const animatedChangeTextColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      checkBoxPosition.value,
      [0, 1],
      [mainColor, secondaryColor],
    );
    return {
      color: color,
    };
  }, [firstPositionChecked]);

  const animatedChangeTextColorSecond = useAnimatedStyle(() => {
    const color = interpolateColor(
      checkBoxPosition.value,
      [0, 1],
      [secondaryColor, mainColor],
    );
    return {
      color: color,
    };
  }, [firstPositionChecked]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => setFirstPositionChecked(!firstPositionChecked)}>
        <View
          style={[
            styles.content,
            {borderColor: mainColor, backgroundColor: secondaryColor},
          ]}>
          <Animated.View
            style={[
              styles.animatedBlock,
              {backgroundColor: mainColor},
              animatedBlockPosition,
            ]}
          />
          <View style={styles.textContainer}>
            <Animated.Text style={[styles.text, animatedChangeTextColor]}>
              {firstPosition}
            </Animated.Text>
          </View>
          <View style={styles.textContainer}>
            <Animated.Text style={[styles.text, animatedChangeTextColorSecond]}>
              {secondPosition}
            </Animated.Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HorizontalCheckbox;
