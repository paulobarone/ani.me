import './styles/global-styles.scss';
import Header from "components/Header/Header";
import Banner from "components/Banner/Banner";
import Update from "components/Update/Update";
import Recent from 'components/Recent/Recent';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Update />
      <Recent />
      <Footer />
    </>
  );
}

export default App;
