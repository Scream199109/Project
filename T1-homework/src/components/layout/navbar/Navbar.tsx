import CartIcon from 'assets/icons/CartIcon';
import {Text} from 'components/shared/text/Text';
import cls from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <div className={cls.wrapper}>
        <a href="/" className={cls.logo}>
          <Text
            size='xl'
            weight='bold'
          >
            Goods4you
          </Text>
        </a>
        <ul className={cls.nav}>
          <li><a href="#catalog"><Text weight='semi_bold' >Catalog</Text> </a></li>
          <li><a href="#faq"><Text weight='semi_bold'>FAQ</Text></a></li>
          <li className={cls.cart}>
            <a href="/cart">
              <Text weight='semi_bold'>Cart</Text>
            </a>
            <span className={cls.cart_item}><CartIcon />
              {/*TODO  Заменить значение на актуальные данне*/}
              <span className={cls.cart_item_counter}>1</span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
