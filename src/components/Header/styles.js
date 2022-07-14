import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    borderWidth: StyleSheet.hairlineWidth,
    // backgroundColor: 'green',
    paddingBottom: 15,
    // shadowColor: '#5F73F1',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 4.59,
    // elevation: 5,
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
    paddingBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#F6F6F6',
    height: 40,
    margin: 12,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 20,
  },
  searchIcon: {
    position: 'absolute',
    top: 24,
    left: 30,
  },
});
