import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '47.5%',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    shadowColor: '#959595',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.05,
    elevation: 4,
  },
  item: {
    minHeight: 230,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 140,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    position: 'absolute',
    top: 0,
  },
  content: {
    width: '100%',
    padding: 10,
    paddingTop: 12,
    paddingHorizontal: 14,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: '#D9DADA',
    marginBottom: 3,
    textTransform: 'uppercase',
  },
  description: {
    height: '100%',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#858585',
    marginBottom: 9,
    lineHeight: 17,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    fontSize: 12,
    color: '#D9DADA',
    marginLeft: 5,
  },
});
