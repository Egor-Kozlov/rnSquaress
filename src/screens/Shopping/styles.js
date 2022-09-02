import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  gestureContainer: {
    marginTop: 40,
    width: '100%',
    height: 400,
    borderWidth: 20,
    borderColor: '#5F73F1',
    borderBottomColor: 'blue',
  },
  messagesList: {
    backgroundColor: '#d3dfe8',
  },
  leftAction: {
    backgroundColor: '#c5c7c9',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  messageContainer: {
    backgroundColor: '#d3dfe8',
    padding: 12,
    // borderRightColor: 'gray',
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
  },
});
