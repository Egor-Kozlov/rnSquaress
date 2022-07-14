import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 55,
  },
  title: {
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 17,
    textTransform: 'uppercase',
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    height: 170,
    paddingTop: 22,
    alignItems: 'center',
  },
  itemSubtitle: {
    marginBottom: 6,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    fontSize: 14,
  },
  itemTitle: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 17,
    fontSize: 15,
  },
  itemBorderLeft: {
    borderTopStartRadius: 35,
  },
  itemBorderRight: {
    borderTopEndRadius: 35,
  },
});
