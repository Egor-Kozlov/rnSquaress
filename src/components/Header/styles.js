import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  hiddenContainer: {
    zIndex: 24,
    marginBottom: -27,
  },
  container: {
    width: '100%',
    height: '100%',
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
    zIndex: 25,
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
  },
  section: {
    width: 70,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {},
  rightSection: {},
  locationIcon: {
    position: 'absolute',
  },
  personIcon: {
    position: 'absolute',
    right: 0,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 22,
    position: 'relative',
  },
  input: {
    backgroundColor: '#F6F6F6',
    height: 40,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 20,
  },
  activeInput: {
    borderWidth: 1,
    borderColor: '#b3bae3',
    marginLeft: -1,
  },
  searchIcon: {
    position: 'absolute',
    top: 11,
    left: 40,
  },
  hiddenSafeAreaView: {
    width: '100%',
    height: 70,
    zIndex: 60,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: -70,
  },
  listContainer: {
    // backgroundColor: '#fff',
    position: 'absolute',
    top: 45,
    left: 20,
    height: 350,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.59,
    elevation: 5,
    borderRadius: 20,
  },
  searchFlatList: {
    borderRadius: 20,
  },
  searchItem: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  searchItemTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#545353',
    width: '80%',
  },
  searchItemTitleHighlight: {
    backgroundColor: '#d1d5ed',
    borderRadius: 50,
    paddingRight: 0,
  },
  searchItemLocation: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#b3bae3',
  },
  firstItem: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lastItem: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
