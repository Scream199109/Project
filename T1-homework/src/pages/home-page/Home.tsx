import Catalog from "components/catalog/Catalog";
import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Home = () => {

  const {hash} = useLocation();

  useEffect(() => {
    // Для переходов по якорным ссылкам между страницами
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, [hash]);

  return (
    <div className="container">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Home;
