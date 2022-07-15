import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Title from '../../../../components/Title/Title';

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title title="Новости" arrowIcon={true} onPressFunc={() => {}} />
      </View>
      <TouchableOpacity style={styles.readMoreBtn}>
        <Text style={styles.readMoreText}>Читать еще</Text>
      </TouchableOpacity>
    </View>
  );
};

export default News;
