import Navbar from "components/layout/navbar/Navbar";
import {Button} from "components/shared/buttons/Button";
import Container from "components/shared/container/Container";
import {classNames} from "components/shared/lib/classNames/classNames";
import Loader from "components/shared/loader/Loader";
import StarRating from "components/shared/star-rating/StarRating";
import {Text} from "components/shared/text/Text";
import {useAppDispatch} from "hooks/useAppDispatch/useAppDispatch";
import CartAddingButtons from "pages/cart-page/CartAddingButtons";
import {getCart} from "pages/cart-page/selectors/getCart/getCart";
import {cartActions} from "pages/cart-page/slice/cartSlice";
import {useCallback, useLayoutEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchCartAddProduct} from "services/cart/fetchCartAddProduct";
import {useGetProductByIdQuery} from "services/product.api";
import cls from './SingleProduce.module.scss';

const SingleProduct = () => {

  const {id} = useParams();

  const ID = id && +id;

  const {data, isFetching, error, isError} = useGetProductByIdQuery(ID, {refetchOnMountOrArgChange: true});

  const [currentImage, setCurrentImage] = useState<string | undefined>('');

  const dispatch = useAppDispatch();

  const cartDetails = useSelector(getCart);
  const {data: cartData, isLoading} = cartDetails;

  const cart = cartData?.carts[0];

  const isProductAdded = !!cart?.products.find(p => p.id === data?.id);
  const quantity = cart?.products.find(p => p.id === data?.id)?.quantity;

  const doRequest = useCallback(async (qty: number) => {
    await dispatch(fetchCartAddProduct({cartId: cart?.id, products: [...cart?.products, {id: data.id, quantity: (quantity ? quantity : 0) + qty}]}));
  }, [dispatch, quantity, data, cart])

  const onIncreseProductAmount = async () => {
    doRequest(1)
  }

  const onDecreseProductAmount = async () => {
    if (!data) return;
    if (quantity === 1) {
      return dispatch(cartActions.removeProduct(data.id))
    }
    doRequest(-1)
  }

  const onAddingToCart = useCallback(async () => {
    doRequest(1);
  }, [doRequest])

  useLayoutEffect(() => {
    setCurrentImage(data?.thumbnail)
  }, [isFetching, data?.thumbnail])

  if (isError) {
    //TODO Типизировать по другому error.data
    return <Text variant="dark" align="center" size="xl">{error.data.message}</Text>
  }

  if (!data) return null;

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
              <img src={currentImage} alt="Кроссовки" className={cls.image} />
              <div className={cls.preview_carousel}>
                {data.images?.map((img, index) =>
                  <span className={cls.preview_carousel_image} key={img}>
                    <img onClick={() => setCurrentImage(img)} src={img}
                      className={classNames('', {[cls.selected]: img === currentImage || (currentImage === data.thumbnail && index === 0)})} />
                  </span>
                )}
              </div>
            </div>
            <div className={cls.product_info_wrapper}>
              <div className={cls.product_info}>
                <div className={cls.product_title}>
                  <Text variant="dark" size="l" weight="semi_bold">
                    {data.title}
                  </Text>
                  <div className={cls.flex_container}>
                    <Text variant="grey" weight="semi_bold">
                      SKU ID
                    </Text>
                    <Text variant="dark" weight="semi_bold">
                      {data.sku}
                    </Text>
                  </div>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Rating
                  </Text>

                  <StarRating rating={data.rating} />

                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Base price
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.price}$
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Discount percentage
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.discountPercentage}%
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Discount price
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.discountPercentage && (data.price - (data.price * data.discountPercentage / 100)).toFixed(2)}$
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Stock
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.stock}
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Brand
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.brand}
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Category
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.category}
                  </Text>
                </div>
                <div className={classNames(cls.product_info_field, {}, [cls.flex_container])}>
                  <Text variant="grey" weight="semi_bold">
                    Description
                  </Text>

                  <Text variant="dark" weight="semi_bold">
                    {data.description}
                  </Text>
                </div>
              </div>
              <div className={cls.button}>
                {
                  isProductAdded && quantity >= 1
                    ?
                    <CartAddingButtons
                      productQuantity={quantity}
                      onIncrese={onIncreseProductAmount}
                      onDecrese={onDecreseProductAmount}
                    />
                    :
                    <Button size="xl" onClick={onAddingToCart}>
                      {
                        isLoading
                          ?
                          <Loader />
                          :
                          <Text>
                            Add to cart
                          </Text>
                      }
                    </Button>
                }
              </div>
            </div>
          </section>
        </Container>
      </div >
    </>
  );
};

export default SingleProduct;
