import Navbar from "components/layout/navbar/Navbar";
import Container from "components/shared/container/Container";
import {Text} from "components/shared/text/Text";
import {useSelector} from "react-redux";
import CartItem from "./CartItem";
import cls from './CartPage.module.scss';
import {getCart} from "./selectors/getCart/getCart";

const CartPage = () => {

  const {data} = useSelector(getCart);

  const cart = data?.carts[0];

  return (
    <>
      <Navbar size="m" />
      {
        cart?.products.length
          ?
          <div className={cls.wrapper}>
            <Container>
              <div className={cls.title}>
                <Text variant="dark" size="xl" weight="bold">
                  My cart
                </Text>
              </div>
              <div className={cls.container}>
                <section className={cls.section}>
                  {cart?.products.map(item => <CartItem {...item} key={item.id} />)}
                </section>
                <div>
                  <div className={cls.amount_text}>
                    <Text variant="grey" size="m">
                      Total count:
                    </Text>
                    <Text variant="dark">
                      {cart?.totalProducts}
                    </Text>
                  </div>
                  <div className={cls.amount_text}>
                    <Text variant="grey" size="m">
                      Total price:
                    </Text>
                    <Text variant="dark" weight="bold">
                      {cart?.total}$
                    </Text>
                  </div>
                  <div className={cls.amount_text}>
                    <Text variant="grey" size="m">
                      Total price with discount:
                    </Text>
                    <Text variant="dark" weight="bold">
                      {cart?.discountedTotal}$
                    </Text>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          :
          <Text variant="dark" align="center" size="xl">
            Корзина пуста
          </Text>
      }
    </>
  );
};

export default CartPage;
