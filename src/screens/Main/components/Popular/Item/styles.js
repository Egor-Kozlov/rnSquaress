import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    width: '50%',
    height: 195,
    paddingTop: 22,
    alignItems: 'center',
    borderRadius: 80,
  },
  itemSubtitle: {
    marginBottom: 6,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    fontSize: 15,
  },
  itemTitle: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 17,
    fontSize: 16,
  },
  itemBorderLeft: {
    borderTopStartRadius: 35,
  },
  itemBorderRight: {
    borderTopEndRadius: 35,
  },
  itemIcon: {
    position: 'absolute',
    width: 110,
    height: 120,
    bottom: 45,
    left: 24,
  },
});
