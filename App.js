import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Router from './src/router/Router';
import Header from './src/components/Header/Header';
import useHeaderScroll from './src/hooks/useHeaderScroll';

const App = () => {
  const {scrollRef, animatedProps, scrollHandler, scrollToPosition} =
    useHeaderScroll();

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Router scrollRef={scrollRef} scrollHandler={scrollHandler} />
        <Header
          // currentScreen={useRoute().name}
          animatedProps={animatedProps}
          scrollToPosition={scrollToPosition}
        />
        {Platform.OS === 'ios' && <SafeAreaView />}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: StatusBar.currentHeight,
    flexDirection: 'column-reverse',
  },
});

export default App;
