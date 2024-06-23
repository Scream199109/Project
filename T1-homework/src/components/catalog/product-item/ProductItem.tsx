import CartIcon from 'assets/icons/CartIcon';
import {Button} from 'components/shared/buttons/Button';
import {classNames} from 'components/shared/lib/classNames/classNames';
import {Text} from 'components/shared/text/Text';
import {useAppDispatch} from 'hooks/useAppDispatch/useAppDispatch';
import CartAddingButtons from 'pages/cart-page/CartAddingButtons';
import {getCart} from 'pages/cart-page/selectors/getCart/getCart';
import {Product} from 'pages/product-page/types/product.types';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCartAddProduct} from 'services/cart/fetchCartAddProduct';
import cls from './ProductItem.module.scss';

type Props = {
  product: Product;
}

const ProductItem = ({product}: Props) => {
  const {title, price, id, thumbnail, stock} = product;

  const dispatch = useAppDispatch();

  const cartDetails = useSelector(getCart);
  const {data, isLoading} = cartDetails;

  const cart = data?.carts[0];

  const cartId = cart?.id;

  const products = cart?.products;

  const quantity = cart?.products.find(p => p.id === product.id)?.quantity;

  const maxStockAvailable = stock > quantity;

  const doRequest = useCallback(async (qty: number) => {
    await dispatch(fetchCartAddProduct({cartId, products: [...products, {id: product.id, quantity: (quantity ? quantity : 0) + qty}]}));
  }, [dispatch, quantity, product, products, cartId])

  const doDeleteRequest = useCallback(async () => {
    await dispatch(fetchCartAddProduct({cartId, products: products.filter(p => p.id !== product.id)}));
  }, [dispatch, product, cartId, products])

  const onIncreseProductAmount = async () => {
    doRequest(1)
  }

  const onDecreseProductAmount = async () => {
    if (quantity === 1) {
      return doDeleteRequest()
    }
    doRequest(-1)
  }

  const onAddingToCart = useCallback(async () => {
    doRequest(1);
  }, [doRequest])

  const isProductAdded = !!cart?.products.find(p => p.id === product.id);

  return (
    <div className={cls.wrapper}>
      <Link to={`/product/${id}`}>
        <span className={cls.image}>
          <img src={thumbnail} alt="Кроссовки" />
        </span>
      </Link>
      <div className={cls.description}>
        <div className={classNames(cls.text, {[cls.text_elipsis]: isProductAdded})}>
          <Text variant='dark' weight='semi_bold'>{title}</Text>
          <Text variant='dark'>{price} $</Text>
        </div>

        <div className={cls.button}>
          {
            isProductAdded && quantity >= 1
              ?
              <CartAddingButtons
                productQuantity={quantity}
                onIncrese={onIncreseProductAmount}
                onDecrese={onDecreseProductAmount}
                plusDisabled={!maxStockAvailable || isLoading}
                minusDisabled={isLoading}
              />
              :
              <Button size='m' onClick={onAddingToCart}>
                <CartIcon />
              </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
