import React from 'react';
import Visa from '../../../assets/icons/creditCard/visa.svg';
import Mastercard from '../../../assets/icons/creditCard/mastercard.svg';
import Chip from '../../../assets/icons/creditCard/chip.svg';
import TransparentChip from '../../../assets/icons/creditCard/transparentChip.svg';
import Background1 from '../../../assets/pictures/creditCard/cardBackground-1.svg';
import Background2 from '../../../assets/pictures/creditCard/cardBackground-2.svg';
import Background3 from '../../../assets/pictures/creditCard/cardBackground-3.svg';
import Background4 from '../../../assets/pictures/creditCard/cardBackground-4.svg';
import Background5 from '../../../assets/pictures/creditCard/cardBackground-5.svg';

const cardsStyle = [
  {
    bank: 'visa',
    bankIcon: <Visa />,
    chip: 'usual',
    chipIcon: <Chip />,
    cardNumber: '**** **** **** 2345',
    person: {
      name: 'Egor',
      surname: 'Kozlov',
    },
    date: {
      year: '30',
      month: '02',
    },
    background: <Background1 />,
  },
  {
    bank: 'mastercard',
    bankIcon: <Mastercard />,
    chip: 'transparent',
    chipIcon: <TransparentChip />,
    cardNumber: '**** **** **** 2345',
    person: {
      name: 'Noman',
      surname: 'Manzoor',
    },
    date: {
      year: '28',
      month: '11',
    },
    background: <Background4 />,
  },
  {
    bank: 'mastercard',
    bankIcon: <Mastercard />,
    chip: 'transparent',
    chipIcon: <TransparentChip />,
    cardNumber: '**** **** **** 2345',
    person: {
      name: 'Noman',
      surname: 'Manzoor',
    },
    date: {
      year: '28',
      month: '11',
    },
    background: <Background5 />,
  },
  {
    bank: 'mastercard',
    bankIcon: <Visa />,
    chip: 'transparent',
    chipIcon: <Chip />,
    cardNumber: '**** **** **** 2345',
    person: {
      name: 'Noman',
      surname: 'Manzoor',
    },
    date: {
      year: '28',
      month: '11',
    },
    background: <Background2 />,
  },
];

export default cardsStyle;
