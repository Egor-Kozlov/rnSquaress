import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Ball from '../../components/TestAnimations/Ball/Ball';
import {Animated} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Square from '../../components/TestAnimations/Square/Square';

const Shopping = () => {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Ball />
        <Square />
        <View style={styles.messagesList}>
          <Swipeable renderLeftActions={renderLeftActions}>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>Message</Text>
            </View>
          </Swipeable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Shopping;
