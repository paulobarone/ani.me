import { useContext } from "react";
import MyContext from 'contexts/MyContext';

function useSearch({ search }) {
  const { data, isFetching } = useContext(MyContext);

  const filteredAnimes = search.length > 0 && !isFetching
    ? data.filter(data => data.title.includes(search))
    : [];

  return { filteredAnimes }
}

export default useSearch;