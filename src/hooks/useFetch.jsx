import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/paulobarone/'
})

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    api.get(url)
      .then(response => setData(response.data))
      .finally(() => setIsFetching(false));
  }, [url])

  return { data, isFetching }
}

export default useFetch;