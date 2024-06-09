import Navbar from "components/layout/navbar/Navbar";
import {Button} from "components/shared/buttons/Button";
import Container from "components/shared/container/Container";
import {classNames} from "components/shared/lib/classNames/classNames";
import {Text} from "components/shared/text/Text";
import {useParams} from "react-router-dom";
import cls from './SingleProduce.module.scss';

const SingleProduct = () => {
  const {id} = useParams();


  // Для того чтобы не было нулевого товара
  const ID = id && (+id + 1);

  return (
    <>
      <Navbar size="m" />
      <div className={cls.wrapper}>
        <Container>
          <div className={cls.title}>
            <Text variant="dark" size="xl" weight="bold">
              Product {ID}
            </Text>
          </div>
          <section className={cls.section}>
            <div className={cls.product_image}>
              <img src="/images/shoes.jpg" alt="Кроссовки" />
              <div className={cls.preview_carousel}>
                <img src="/images/shoes-mini.jpg" alt="миниатюра кроссовки" className={cls.selected} />
                <img src="/images/shoes-mini.jpg" alt="миниатюра кроссовки" />
                <img src="/images/shoes-mini.jpg" alt="миниатюра кроссовки" />
                <img src="/images/shoes-mini.jpg" alt="миниатюра кроссовки" />
                <img src="/images/shoes-mini.jpg" alt="миниатюра кроссовки" />
                <img src="/images/shoes-mini.jpg" alt="миниатюра кроссовки" />
              </div>
            </div>
            <div className={cls.product_info_wrapper}>
              <div className={cls.product_info}>
                <div className={cls.product_title}>
                  <Text variant="dark" size="l" weight="semi_bold">
                    Puma Force 1 Shadow
                  </Text>
                  <div className={cls.flex_container}>
                    <Text variant="grey" weight="semi_bold">
                      SKU ID
                    </Text>
                    <Text variant="dark" weight="semi_bold">
                      {`000${ID}`}
                    </Text>
                  </div>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Rating
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    Rating
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Base price
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    500$
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Discount percentage
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    10%
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Discount price
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    450$
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Stock
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    13
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Brand
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    Puma
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Category
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    Smartphones
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Description
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    An apple mobile which is nothing like apple
                  </Text>
                </div>
              </div>

              <div className={cls.button}>
                <Button size="xl">
                  Add to cart
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>

  );
};

export default SingleProduct;
