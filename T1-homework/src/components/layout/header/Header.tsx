import {Button} from 'components/shared/buttons/Button';
import Container from 'components/shared/container/Container';
import {Text} from 'components/shared/text/Text';
import Navbar from '../navbar/Navbar';
import cls from './Header.module.scss';

const Header = () => {
  return (
    <>
      <Navbar withBorder />
      <header className={cls.header}>
        <Container>
          <div className={cls.text_wrapper}>
            <div className={cls.about} >
              <Text size='xxl'>
                Any products from famous brands <br /> with worldwide delivery
              </Text>
            </div>

            <Text>
              We sell smartphones, laptops, clothes, shoes <br /> and many other products at low prices
            </Text>

            <Button
              size='xl'
              className={cls.button}
            >
              <Text>
                Go to shopping
              </Text>
            </Button>
          </div>
          <div className={cls.title}>
            <Text
              align='center'
              size='big'
              weight='bold'
            >
              Goods4you
            </Text>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
