import {Button} from 'components/shared/buttons/Button';
import {Text} from 'components/shared/text/Text';
import {Link} from 'react-router-dom';
import {CartProduct} from 'services/types/cart';
import CartAddingButtons from './CartAddingButtons';
import cls from './CartPage.module.scss';

const CartItem = (product: CartProduct) => {

  return (
    <div className={cls.product}>
      <Link to={`/product/${product.id}`}>
        <div className={cls.product_info}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <Text variant="dark" weight="semi_bold">
              {product.title}
            </Text>
            <Text variant="dark" size="m">
              {product.price} $
            </Text>
          </div>
        </div>
      </Link>

      <CartAddingButtons
        productQuantity={product.quantity}
      />

      <Button variant="clear">
        <Text size="xs" variant="grey" className={cls.text}>
          Delete
        </Text>
      </Button>
    </div>
  );
};

export default CartItem;
