import React from 'react';

export default async function useRequest() {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const request = async (url, options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    request,
  };
}
