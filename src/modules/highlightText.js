import React from 'react';
import {Text} from 'react-native';

const highlightText = (string, textStyle) =>
  string.split('').map((word, i) => (
    <Text key={i}>
      <Text style={textStyle}>{word}</Text>
    </Text>
  ));

export default highlightText;
