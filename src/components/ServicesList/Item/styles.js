import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  servicesItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    width: '33.33%',
    height: 125,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#5F73F1',
    marginTop: 12,
  },
  borderRight: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderTopWidth: 0,
    borderBottomEndRadius: 35,
  },
  borderLeft: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderTopWidth: 0,
    borderBottomStartRadius: 35,
  },
  disableBorderTop: {
    borderTopWidth: 0,
  },
});
