import {StyleSheet} from 'react-native';

import React from 'react';
import RadioIcon from './icons/radio-icon.svg';
import FruitIcon from './icons/fruit-icon.svg';
import SoundIcon from './icons/sound-icon.svg';
import BackpackIcon from './icons/backpack-icon.svg';

const popularItems = [
  {
    title: 'Новый Год 2021',
    icon: <RadioIcon />,
    category: 'Развлечения',
    color: '#7CDBF5',
  },
  {
    title: 'Онлайн обучение',
    icon: <FruitIcon />,
    category: 'Обучение',
    color: '#FFB39C',
  },
  {
    title: 'Новый год 2021',
    icon: <SoundIcon />,
    category: 'Развлечения',
    color: '#BD98F7',
  },
  {
    title: 'Онлайн Обучение',
    icon: <BackpackIcon />,
    category: 'Обучение',
    color: '#AEDCBF',
  },
];

export default popularItems;
