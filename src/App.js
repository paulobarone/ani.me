import './styles/global-styles.scss';
import Header from "components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import MyContext from 'contexts/MyContext';
import useFetch from 'hooks/useFetch';
import Anime from 'pages/Anime';

function App() {
  const { data, isFetching } = useFetch('43d56ca742a5570f49feeb0d8a552352/raw/3109050e9b42d3d1277745fe6f91c9e55adb0f45/animesDB.json');

  return (
    <MyContext.Provider value={{ data, isFetching }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:path" element={<Anime />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
