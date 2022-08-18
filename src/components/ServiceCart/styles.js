import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cart: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#5F73F1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7.68,

    elevation: 4,
  },
  serviceType: {
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(119, 119, 119, 0.3)',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Regular',
  },
  serviceName: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 22,
    color: '#464646',
    fontFamily: 'Montserrat-Medium',
  },
  serviceData: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceAddress: {
    fontFamily: 'Montserrat-Regular',
    color: '#747474',
  },
  locationIcon: {
    marginRight: 7,
  },
  workTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workTime: {
    fontFamily: 'Montserrat-Regular',
    color: '#747474',
  },
  clockIcon: {
    marginRight: 7,
  },
  favoriteContainer: {
    position: 'absolute',
    right: 15,
    top: 20,
    flexDirection: 'row',
  },
  favorite: {
    width: 40,
    height: 40,
    marginRight: 7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(95, 115, 241, 0.33)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 9.11,
    elevation: 14,
  },
  mobile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5F73F1',
  },
  picturesContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#747474',
    lineHeight: 18,
    fontSize: 13,
  },
  actionList: {
    paddingVertical: 20,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9DADA',
    padding: 3,
    marginRight: 15,
    borderRadius: 20,
  },
  circle: {
    width: 18,
    height: 18,
    backgroundColor: '#5F73F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontFamily: 'Montserrat-Regular',
    color: '#747474',
    fontSize: 13,
    marginLeft: 10,
    marginRight: 8,
  },
});
