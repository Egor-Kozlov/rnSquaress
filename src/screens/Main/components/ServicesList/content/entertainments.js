import GamepadIcon from '../../../../../../assets/icons/servicesIcons/gamepad-icon.svg';
import CameraIcon from '../../../../../../assets/icons/servicesIcons/camera-icon.svg';
import ChickenIcon from '../../../../../../assets/icons/servicesIcons/chicken-icon.svg';
import PackageIcon from '../../../../../../assets/icons/servicesIcons/package-icon.svg';
import HeartIcon from '../../../../../../assets/icons/servicesIcons/heart-icon.svg';
import CloudIcon from '../../../../../../assets/icons/servicesIcons/cloud-icon.svg';
import SettingsIcon from '../../../../../../assets/icons/servicesIcons/settings-icon.svg';
import SunIcon from '../../../../../../assets/icons/servicesIcons/sun-icon.svg';
import CakeIcon from '../../../../../../assets/icons/servicesIcons/cake-icon.svg';
import WheelchairIcon from '../../../../../../assets/icons/servicesIcons/wheelchair-icon.svg';
import DiscountIcon from '../../../../../../assets/icons/servicesIcons/discount-icon.svg';
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
