import CartIcon from 'assets/icons/CartIcon';
import {CardItemType} from 'components/catalog/Catalog';
import {Button} from 'components/shared/buttons/Button';
import {Text} from 'components/shared/text/Text';
import {Link} from 'react-router-dom';
import cls from './ProductItem.module.scss';

const ProductItem = ({image, name, price, id}: CardItemType) => {
  return (
    <div className={cls.wrapper}>
      <Link to={`/product/${id}`}>
        <span>
          <img src={image} alt="Кроссовки" />
        </span>
        <div className={cls.description}>
          <div>
            <Text variant='dark' weight='semi_bold'>{name}</Text>
            <Text variant='dark'>{price} $</Text>
          </div>
        </div>
      </Link>
      <div className={cls.button}>
        <Button size='m'>
          <CartIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
