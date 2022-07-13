import GamepadIcon from '../icons/gamepad-icon.svg';
import CameraIcon from '../icons/camera-icon.svg';
import ChickenIcon from '../icons/chicken-icon.svg';
import PackageIcon from '../icons/package-icon.svg';
import HeartIcon from '../icons/heart-icon.svg';
import CloudIcon from '../icons/cloud-icon.svg';
import SettingsIcon from '../icons/settings-icon.svg';
import SunIcon from '../icons/sun-icon.svg';
import CakeIcon from '../icons/cake-icon.svg';
import WheelchairIcon from '../icons/wheelchair-icon.svg';
import DiscountIcon from '../icons/discount-icon.svg';
import React from 'react';

const entertainments = [
  {
    title: 'Развлечения',
    icon: <GamepadIcon />,
    screen: 'Entertainments',
    navigationOptions: {
      title: 'Развлечения',
    },
  },
  {
    title: 'Афиша',
    icon: <CameraIcon />,
    screen: 'Poster',
    navigationOptions: {
      title: 'Афиша',
    },
  },
  {
    title: 'Еда',
    icon: <ChickenIcon />,
    screen: 'Food',
    navigationOptions: {
      title: 'Еда',
    },
  },
  {
    title: 'Шопинг',
    icon: <PackageIcon />,
    screen: 'Shoping',
    navigationOptions: {
      title: 'Шопинг',
    },
  },
  {
    title: 'Здоровье',
    icon: <HeartIcon />,
    screen: 'Health',
    navigationOptions: {
      title: 'Health',
    },
  },
  {
    title: 'Обучение',
    icon: <CloudIcon />,
    screen: 'Learning',
    navigationOptions: {
      title: 'Learning',
    },
  },
  {
    title: 'Услуги',
    icon: <SettingsIcon />,
    screen: 'Learning',
    navigationOptions: {
      title: 'Learning',
    },
  },
  {
    title: 'Туризм и отдых',
    icon: <SunIcon />,
    screen: 'Tourism',
    navigationOptions: {
      title: 'Tourism',
    },
  },
  {
    title: 'Детский праздник',
    icon: <CakeIcon />,
    screen: 'Children',
    navigationOptions: {
      title: 'Children',
    },
  },
  {
    title: 'Беременным',
    icon: <WheelchairIcon />,
    screen: 'Pregnant',
    navigationOptions: {
      title: 'Pregnant',
    },
  },
  {
    title: 'Туризм и Отдых',
    icon: <DiscountIcon />,
    screen: 'Tourism',
    navigationOptions: {
      title: 'Tourism',
    },
  },
];

export default entertainments;
