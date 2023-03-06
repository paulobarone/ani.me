import './styles/global-styles.scss';
import Header from "components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
