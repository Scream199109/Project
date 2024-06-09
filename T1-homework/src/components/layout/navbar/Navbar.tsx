import CartIcon from 'assets/icons/CartIcon';
import Container from 'components/shared/container/Container';
import {classNames} from 'components/shared/lib/classNames/classNames';
import {Text} from 'components/shared/text/Text';
import {Link} from 'react-router-dom';
import cls from './Navbar.module.scss';

type Size = 's' | 'm' | 'l';

type Props = {
  withBorder?: boolean;
  size?: Size;
}

const Navbar = ({withBorder, size = 's'}: Props) => {

  return (
    <nav className={classNames(cls.nav, {}, [cls[size]])}>
      <Container>
        <div className={classNames(cls.wrapper, {[cls.withBorder]: withBorder})}>
          <Link to="/" className={cls.logo}>
            <Text
              size='xl'
              weight='bold'
            >
              Goods4you
            </Text>
          </Link>
          <ul className={cls.links}>
            <li className={cls.link}><Link to="/#catalog" ><Text weight='semi_bold' >Catalog</Text> </Link></li>
            <li className={cls.link}><Link to="/#faq"><Text weight='semi_bold'>FAQ</Text></Link></li>
            <li className={classNames(cls.cart, {}, [cls.link])}>
              <Link to="/cart">
                <Text weight='semi_bold'>Cart</Text>
              </Link>
              <span className={cls.cart_item}>
                <CartIcon />
                {/*TODO  Заменить значение на актуальные данне*/}
                <span className={cls.cart_item_counter}>1</span>
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
