import Catalog from "components/catalog/Catalog";
import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Home;
