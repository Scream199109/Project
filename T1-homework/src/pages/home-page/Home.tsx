import Catalog from "components/catalog/Catalog";
import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";
import {getUserAuthData} from "entities/user/selectors/getUserAuthData";
import {useAppDispatch} from "hooks/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {fetchCartByUser} from "services/cart/fetchCartByUser";

const Home = () => {

  const dispatch = useAppDispatch();

  const user = useSelector(getUserAuthData);

  useEffect(() => {
    dispatch(fetchCartByUser(user?.id))
  }, [dispatch, user]);

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
