/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Pressable} from 'react-native';
import hideKeyboard from './src/hooks/hideKeyboard';
import Main from './src/screens/Main/Main';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPressIn={hideKeyboard}>
        <Main />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
