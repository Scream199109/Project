import {Button} from 'components/shared/buttons/Button';
import Container from 'components/shared/container/Container';
import {Text} from 'components/shared/text/Text';
import Navbar from '../navbar/Navbar';
import cls from './Header.module.scss';

const Header = () => {
  return (
    <header className={cls.header}>
      <Container>
        <Navbar />
        <div className={cls.text_wrapper}>

          <Text size='xxl'>
            Any products from famous brands <br /> with worldwide delivery
          </Text>

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

        <Text
          align='center'
          size='big'
        />
      </Container>
    </header>
  );
};

export default Header;
