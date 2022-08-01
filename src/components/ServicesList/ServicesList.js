import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import entertainments from './content/entertainments';
import Item from './Item/Item';
import MoreIcon from '../../../assets/icons/servicesIcons/more-icon.svg';
import SCREEN_LIST from '../../router/screen-list';

const ServicesList = ({navigation}) => {
  console.log('navigation: ', navigation);
  const [visibleService, setVisibleService] = useState([]);

  const showFirstFiveServices = () => {
    setVisibleService(entertainments.slice(0, 5));
  };

  const onShowAllServices = () => {
    setVisibleService(entertainments);
  };

  useEffect(() => {
    showFirstFiveServices();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.servicesList}>
        {visibleService.map((item, index) => (
          <Item
            key={item.title}
            title={item.title}
            icon={item.icon}
            onPressFunc={
              item.title === 'Здоровье'
                ? () => navigation.navigate(SCREEN_LIST.Health)
                : showFirstFiveServices
            }
            border={index === visibleService.length - 2 ? 'left' : null}
            disableBorderTop={index === 0 || index === 1 || index === 2}
          />
        ))}
        {visibleService && visibleService.length !== entertainments.length ? (
          <Item
            title={'Еще'}
            icon={<MoreIcon />}
            onPressFunc={onShowAllServices}
            border={'right'}
          />
        ) : (
          <Item border={'right'} />
        )}
      </View>
    </View>
  );
};

export default ServicesList;
