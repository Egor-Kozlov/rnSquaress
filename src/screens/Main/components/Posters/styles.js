import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    paddingHorizontal: 20,
  },
  listingContainer: {
    backgroundColor: '#72C4FE',
  },
  whiteBoxesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 30,
  },
  genresList: {
    width: '100%',
    height: 40,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 17,
  },
  booksList: {
    width: '100%',
    paddingBottom: 50,
  },
  noResults: {
    paddingTop: 40,
    textAlign: 'center',
    width: '100%',
    height: 260,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
});
