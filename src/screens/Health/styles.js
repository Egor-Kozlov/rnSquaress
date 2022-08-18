import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    backgroundColor: '#E2E6FC',
  },
  scroll: {
    flex: 1,
    zIndex: 5,
    // paddingTop: 20,
    paddingTop: 70,
  },
  horizontalCheckboxContainer: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  categoryTitleContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  discountList: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
