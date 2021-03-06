import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  titleContainer: {
    marginBottom: 30,
  },
  list: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
  },
  readMoreBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    paddingVertical: 13,
    borderRadius: 20,
  },
  readMoreText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 17,
    color: '#747474',
  },
});
