import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    zIndex: 10,
  },
  text: {
    paddingVertical: 12,
    fontFamily: 'Montserrat-Regular',
  },
  animatedBlock: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    borderRadius: 25,
  },
});
