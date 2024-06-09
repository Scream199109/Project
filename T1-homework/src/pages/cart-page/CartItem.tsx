import MinusIcon from 'assets/icons/MinusIcon';
import PlusIcon from 'assets/icons/PlusIcon';
import {Button} from 'components/shared/buttons/Button';
import Input from 'components/shared/input/Input';
import {Text} from 'components/shared/text/Text';
import {Product} from 'pages/product-page/types/types';
import cls from './CartPage.module.scss';

const CartItem = (product: Product) => {
  return (
    <div className={cls.product}>
      <div className={cls.product_info}>
        <img src="/images/shoes-cart-mini.jpg" alt="Кроссовки" />
        <div>
          <Text variant="dark" weight="semi_bold">
            {product.title}
          </Text>
          <Text variant="dark" size="m">
            {product.base_price} $
          </Text>
        </div>
      </div>
      <div className={cls.add_buttons}>
        <Button>
          <MinusIcon />
        </Button>

        <Input type="text" className={cls.add_buttons_amount} defaultValue='1' />

        <Button>
          <PlusIcon />
        </Button>
      </div>
      <Button variant="clear">
        <Text size="xs" variant="grey" className={cls.text}>
          Delete
        </Text>
      </Button>
    </div>
  );
};

export default CartItem;
