const searchNews = (newsList, searchableValue) => {
  const findRelevantNews = newsList.reduce((acc, news) => {
    const {author, description} = news;

    if (description.toLowerCase().includes(searchableValue)) {
      acc.push({
        searchableValue: description.slice(
          description.toLowerCase().indexOf(searchableValue),
          description.toLowerCase().indexOf(searchableValue) +
            searchableValue.length,
        ),
        // get string before searchableValue
        stringBeforeSearchableValue: description.slice(
          0,
          description.toLowerCase().indexOf(searchableValue),
        ),
        // get string after searchableValue
        stringAfterSearchableValue: description.slice(
          description.toLowerCase().indexOf(searchableValue) +
            searchableValue.length,
        ),
        located: 'news',
        finderParameter: 'description',
      });
    }

    if (author.toLowerCase().includes(searchableValue)) {
      acc.push({
        searchableValue: author.slice(
          author.toLowerCase().indexOf(searchableValue),
          author.toLowerCase().indexOf(searchableValue) +
            searchableValue.length,
        ),
        // get string before searchableValue
        stringBeforeSearchableValue: author.slice(
          0,
          author.toLowerCase().indexOf(searchableValue),
        ),
        // get string after searchableValue
        stringAfterSearchableValue: author.slice(
          author.toLowerCase().indexOf(searchableValue) +
            searchableValue.length,
        ),
        located: 'news',
        finderParameter: 'author',
      });
    }

    return acc;
  }, []);
  return findRelevantNews;
};

export default searchNews;
