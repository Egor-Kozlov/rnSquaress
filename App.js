/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  StatusBar,
  View,
} from 'react-native';
import hideKeyboard from './src/hooks/hideKeyboard';
import Main from './src/screens/Main/Main';

const App = () => {
  return (
    <View style={styles.container}>
      <Pressable onPressIn={hideKeyboard}>
        <Main />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
