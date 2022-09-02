import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Router from './src/router/Router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <GestureHandlerRootView style={styles.container}>
        <Router />
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
