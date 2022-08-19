import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 175,
    height: 240,
    borderRadius: 33,
    margin: 10,
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#5F73F1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8.68,
    elevation: 11,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 33,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    padding: 12,
    height: '50%',
    justifyContent: 'space-between',
  },
  title: {
    color: '#5F73F1',
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    lineHeight: 16,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    marginLeft: 5,
    fontSize: 9,
    fontFamily: 'Montserrat-Regular',
    color: '#C4C4C4',
  },
  date: {
    marginLeft: 5,
    fontSize: 9,
    fontFamily: 'Montserrat-Regular',
    color: '#C4C4C4',
  },
});
