import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    // height: 130,
    paddingTop: 25,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    shadowColor: '#5F73F1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 15.27,
    elevation: 10,
    backgroundColor: '#fff',
  },
  title: {
    color: '#5F73F1',
    fontSize: 34,
    fontFamily: 'Montserrat-ExtraBold',
    lineHeight: 41,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    // opacity: 0,
  },
  input: {
    backgroundColor: '#F6F6F6',
    height: 40,
    // margin: 12,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 20,
  },
  searchIcon: {
    position: 'absolute',
    top: 11,
    left: 40,
  },
});
