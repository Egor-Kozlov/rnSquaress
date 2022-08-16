import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import LocationIcon from '../../../assets/icons/serviceCard/locationSmall-icon';
import ClockIcon from '../../../assets/icons/serviceCard/clock-icon';
import BookmarkIcon from '../../../assets/icons/serviceCard/bookmark-icon';
import MobileIcon from '../../../assets/icons/serviceCard/mobile-icon';

const ServiceCart = () => {
  return (
    <View style={styles.cart}>
      <View style={styles.header}>
        <Text style={styles.serviceType}>Студия красоты</Text>
        <Text style={styles.serviceName}>BellaNika</Text>
        <View style={styles.serviceData}>
          <View style={styles.locationContainer}>
            <LocationIcon style={styles.locationIcon} />
            <Text style={styles.serviceAddress}>
              г. Москва, ул. Пушкина, д. 1
            </Text>
          </View>
          <View style={styles.workTimeContainer}>
            <ClockIcon style={styles.clockIcon} />
            <Text style={styles.workTime}>до 19:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.favoriteContainer}>
        <TouchableOpacity style={styles.favorite}>
          <BookmarkIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mobile}>
          <MobileIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceCart;
