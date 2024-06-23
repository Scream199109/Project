import CartIcon from 'assets/icons/CartIcon';
import {Button} from 'components/shared/buttons/Button';
import {Text} from 'components/shared/text/Text';
import {Product} from 'pages/product-page/types/product.types';
import {Link} from 'react-router-dom';
import cls from './ProductItem.module.scss';

const ProductItem = ({title, price, id, thumbnail}: Product) => {

  return (
    <div className={cls.wrapper}>
      <Link to={`/product/${id}`}>
        <span className={cls.image}>
          <img src={thumbnail} alt="Кроссовки" />
        </span>
      </Link>
      <div className={cls.description}>
        <div className={cls.text}>
          <Text variant='dark' weight='semi_bold'>{title}</Text>
          <Text variant='dark'>{price} $</Text>
        </div>

        <div className={cls.button}>

          <Button size='m'>
            <CartIcon />
          </Button>

        </div>
      </div>
    </div>
  );
};

export default ProductItem;
