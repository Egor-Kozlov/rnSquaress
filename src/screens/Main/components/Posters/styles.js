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
  activityIndicator: {
    paddingTop: 40,
    width: '100%',
    height: 260,
  },
  noResultsText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#D9DADA',
    textAlign: 'center',
    height: 260,
  },
});
