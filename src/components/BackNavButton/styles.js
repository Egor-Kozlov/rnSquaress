import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(95, 115, 241, 0.48)',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  circleContainer: {
    width: 23,
    height: 23,
    marginRight: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(95, 115, 241, 0.48)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
