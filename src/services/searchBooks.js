const searchBooks = (newsList, searchableValue) => {
  const findRelevantBooks = newsList.reduce((acc, book) => {
    const {artistName, name} = book;

    if (artistName.toLowerCase().includes(searchableValue)) {
      acc.push({
        searchableValue: artistName.slice(
          artistName.toLowerCase().indexOf(searchableValue),
          artistName.toLowerCase().indexOf(searchableValue) +
            searchableValue.length,
        ),
        // get string before searchableValue
        stringBeforeSearchableValue: artistName.slice(
          0,
          artistName.toLowerCase().indexOf(searchableValue),
        ),
        // get string after searchableValue
        stringAfterSearchableValue: artistName.slice(
          artistName.toLowerCase().indexOf(searchableValue) +
            searchableValue.length,
        ),
        located: 'books',
        finderParameter: 'artistName',
      });
    }
    if (name.toLowerCase().includes(searchableValue)) {
      acc.push({
        searchableValue: name.slice(
          name.toLowerCase().indexOf(searchableValue),
          name.toLowerCase().indexOf(searchableValue) + searchableValue.length,
        ),
        // get string before searchableValue
        stringBeforeSearchableValue: name.slice(
          0,
          name.toLowerCase().indexOf(searchableValue),
        ),
        // get string after searchableValue
        stringAfterSearchableValue: name.slice(
          name.toLowerCase().indexOf(searchableValue) + searchableValue.length,
        ),
        located: 'books',
        finderParameter: 'name',
      });
    }
    return acc;
  }, []);
  return findRelevantBooks;
};

export default searchBooks;
