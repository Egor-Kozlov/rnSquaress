import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SCREEN_LIST from './screen-list';
import Health from '../screens/Health/Health';
import Main from '../screens/Main/Main';
import Header from '../components/Header/Header';
import useHeaderScroll from '../hooks/useHeaderScroll';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  const {scrollRef, animatedProps, scrollHandler, scrollToPosition} =
    useHeaderScroll();
  const [disableScroll, setDisableScroll] = useState(false);

  return (
    <NavigationContainer style={styles.container}>
      {Platform.OS === 'ios' && <SafeAreaView />}
      <Header
        animatedProps={animatedProps}
        scrollToPosition={scrollToPosition}
        setDisableScroll={setDisableScroll}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN_LIST.Main}>
          {({navigation}) => (
            <Main
              scrollRef={scrollRef}
              scrollHandler={scrollHandler}
              navigation={navigation}
              disableScroll={disableScroll}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={SCREEN_LIST.Health}>
          {({navigation}) => (
            <Health
              scrollRef={scrollRef}
              scrollHandler={scrollHandler}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: StatusBar.currentHeight,
  },
});
