import Navbar from "components/layout/navbar/Navbar";
import Container from "components/shared/container/Container";
import {Text} from "components/shared/text/Text";
import {Product} from "pages/product-page/types/types";
import CartItem from "./CartItem";
import cls from './CartPage.module.scss';

const cartItems: Product[] = [
  {
    id: '1',
    title: 'Essence Mascara Lash Princess',
    base_price: 110
  },
  {
    id: '2',
    title: 'Essence Mascara Lash Princess',
    base_price: 110
  },
  {
    id: '3',
    title: 'Essence Mascara Lash Princess',
    base_price: 110
  },
]

const CartPage = () => {

  return (
    <>
      <Navbar size="m" />
      <div className={cls.wrapper}>
        <Container>
          <div className={cls.title}>
            <Text variant="dark" size="xl" weight="bold">
              My cart
            </Text>
          </div>
          <div className={cls.container}>
            <section className={cls.section}>
              {cartItems.map(item => <CartItem {...item} key={item.id} />)}
            </section>
            <div>
              <div className={cls.amount_text}>
                <Text variant="grey" size="m">
                  Total count:
                </Text>
                <Text variant="dark">
                  {cartItems.length}
                </Text>
              </div>
              <div className={cls.amount_text}>
                <Text variant="grey" size="m">
                  Total price:
                </Text>
                <Text variant="dark" weight="bold">
                  700$
                </Text>
              </div>
              <div className={cls.amount_text}>
                <Text variant="grey" size="m">
                  Total price with discount:
                </Text>
                <Text variant="dark" weight="bold">
                  590$
                </Text>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartPage;
