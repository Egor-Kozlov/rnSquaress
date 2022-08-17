import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import LocationIcon from '../../../assets/icons/serviceCard/locationSmall-icon';
import ClockIcon from '../../../assets/icons/serviceCard/clock-icon';
import BookmarkIcon from '../../../assets/icons/serviceCard/bookmark-icon';
import MobileIcon from '../../../assets/icons/serviceCard/mobile-icon';
import QuestionIcon from '../../../assets/icons/serviceCard/question-icon';
import SubmitIcon from '../../../assets/icons/serviceCard/submit-icon';
import StarIcon from '../../../assets/icons/serviceCard/star-icon';

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
      <View style={styles.picturesContainer}>
        <Image source={require('../../../assets/pictures/servicePhoto1.png')} />
        <Image source={require('../../../assets/pictures/servicePhoto2.png')} />
        <Image source={require('../../../assets/pictures/servicePhoto3.png')} />
      </View>
      <Text style={styles.description}>
        Студия красоты с уникальным симбиозом безупречного сервиса и высоких
        стандартов качества предоставляемых услуг
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.actionList}>
        <TouchableOpacity style={styles.action}>
          <View style={styles.circle}>
            <QuestionIcon />
          </View>
          <Text style={styles.actionText}>Задать вопрос</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.circle}>
            <SubmitIcon />
          </View>
          <Text style={styles.actionText}>Записаться</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.circle}>
            <StarIcon />
          </View>
          <Text style={styles.actionText}>Услуги</Text>
        </TouchableOpacity>
      </ScrollView>
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
