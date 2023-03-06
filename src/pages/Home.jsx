import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import Recent from "components/Recent/Recent";
import Update from "components/Update/Update";

function Home() {
  return (
    <>
      <Banner />
      <Update />
      <Recent />
      <Footer />
    </>
  )
}

export default Home;