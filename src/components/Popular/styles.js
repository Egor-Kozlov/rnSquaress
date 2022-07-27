import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 45,
  },
  title: {
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 17,
    textTransform: 'uppercase',
  },
  titleContainer: {
    paddingLeft: 20,
    marginBottom: 30,
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
