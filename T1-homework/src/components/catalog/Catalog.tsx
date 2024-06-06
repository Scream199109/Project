import SearchPanel from 'components/search-panel/SearchPanel';
import {Button} from 'components/shared/buttons/Button';
import Container from 'components/shared/container/Container';
import {Text} from 'components/shared/text/Text';
import cls from './Catalog.module.scss';
import ProductItem from './product-item/ProductItem';

export type CardItemType = {
  name: string;
  image: string;
  price: string;
  id: number;
}
const item = {
  name: 'Essensce Mascara Lash Princess',
  image: '/images/image.jpg',
  price: '110',
  id: 1
}

const items: CardItemType[] = [];
items.length = 9;
items.fill(item);

const Catalog = () => {
  return (
    <Container>
      <section className={cls.wrapper} id='catalog'>
        <div className={cls.title}>
          <div className={cls.search_panel}>
            <Text size='xl' weight='bold' variant='dark'>
              Catalog
            </Text>
            <SearchPanel />
          </div>
        </div>
        <div className={cls.product_items}>
          {items.map((item, index) => <ProductItem {...item} id={index} key={`${index}-${item.name}`} />)}
        </div>
        <div className={cls.show_more_button}>
          <Button size='xl'>
            <Text>
              Show more
            </Text>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Catalog;
