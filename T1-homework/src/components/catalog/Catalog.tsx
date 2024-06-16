import SearchPanel from 'components/search-panel/SearchPanel';
import {Button} from 'components/shared/buttons/Button';
import Container from 'components/shared/container/Container';
import Loader from 'components/shared/loader/Loader';
import {Text} from 'components/shared/text/Text';
import {ChangeEvent, useEffect, useState} from 'react';
import {useGetAllProductQuery} from 'services/product.api';
import {useDebounce} from 'utils/debounce';
import cls from './Catalog.module.scss';
import ProductItem from './product-item/ProductItem';

export type CardItemType = {
  title: string;
  images: string[];
  price: string;
  id: number;
}

export type QueryParams = {
  limit: number;
  skip: number;
  q?: string;
}

const initialLimit = 9;

const Catalog = () => {
  const [skip, setSkip] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    refetch();
  }

  const [debouncedSearchText, value, setValue] = useDebounce<string>('');

  const params: QueryParams = {
    limit: initialLimit,
    skip,
    q: debouncedSearchText
  }

  const {data, isFetching, refetch} = useGetAllProductQuery(params, {refetchOnMountOrArgChange: false});

  const products = data?.products;
  const total = data?.total;

  useEffect(() => {
    setSkip(0);
  }, [debouncedSearchText, skip]);

  const isShowMoreAvailable = total && products?.length && (products?.length < total);

  return (
    <>
      <div className={cls.wrapper}>
        <Container>
          <section className={cls.section} id='catalog'>
            <div className={cls.title}>
              <div className={cls.search_panel}>
                <Text size='xl' weight='bold' variant='dark'>
                  Catalog
                </Text>
                <SearchPanel onChange={onChange} onClick={onClick} />
              </div>
            </div>
            {isFetching ?
              <Loader />
              :
              <>
                {
                  products?.length ?
                    <div className={cls.product_items}>
                      {products?.map(item => <ProductItem {...item} id={item.id} key={item.id} />)}
                    </div>
                    :
                    <p className={cls.no_items_text}>
                      <Text variant='dark' align='center' size='l'>
                        Товары не найдены
                      </Text>
                    </p>
                }
              </>
            }
            {
              !!isShowMoreAvailable &&
              <div className={cls.show_more_button}>
                <Button size='xl' onClick={() => setSkip(skip + initialLimit)}>
                  <Text>
                    Show more
                  </Text>
                </Button>
              </div>
            }
          </section>
        </Container>
      </div>
    </>
  );
};

export default Catalog;
