import {Button} from 'components/shared/buttons/Button';
import {Text} from 'components/shared/text/Text';
import {useAppDispatch} from 'hooks/useAppDispatch/useAppDispatch';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCartAddProduct} from 'services/cart/fetchCartAddProduct';
import {CartProduct} from 'services/types/cart';
import CartAddingButtons from './CartAddingButtons';
import cls from './CartPage.module.scss';
import {getCart} from './selectors/getCart/getCart';

const CartItem = (product: CartProduct) => {

  const dispatch = useAppDispatch();

  const cartDetails = useSelector(getCart);

  const {data} = cartDetails;

  const cart = data.carts[0];

  const quantity = cart?.products.find(p => p.id === product.id)?.quantity;

  const doRequest = useCallback(async (qty: number) => {
    await dispatch(fetchCartAddProduct({cartId: cart?.id, products: [...cart?.products, {id: product.id, quantity: (quantity ? quantity : 0) + qty}]}));
  }, [dispatch, quantity, cart, product])

  const doDeleteRequest = useCallback(async () => {
    await dispatch(fetchCartAddProduct({cartId: cart?.id, products: cart?.products.filter(p => p.id !== product.id)}));
  }, [dispatch, cart, product])

  const onIncreseProductAmount = async () => {
    doRequest(1)
  }

  const onDecreseProductAmount = async () => {
    if (quantity === 1) {
      return doDeleteRequest()
    }
    doRequest(-1)
  }

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

      <div className={cls.buttons_wrapper}>
        <CartAddingButtons
          productQuantity={product.quantity}
          onIncrese={onIncreseProductAmount}
          onDecrese={onDecreseProductAmount}
        />
      </div>

      <Button
        variant="clear"
        onClick={doDeleteRequest}
      >
        <Text size="xs" variant="grey" className={cls.text}>
          Delete
        </Text>
      </Button>
    </div>
  );
};

export default CartItem;
