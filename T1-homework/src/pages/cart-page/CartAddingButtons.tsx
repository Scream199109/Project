import MinusIcon from "assets/icons/MinusIcon";
import PlusIcon from "assets/icons/PlusIcon";
import {Button} from "components/shared/buttons/Button";
import {Text} from "components/shared/text/Text";
import cls from './CartPage.module.scss';

type Props = {
  productQuantity?: number;
  onIncrese?: () => void;
  onDecrese?: () => void;
  plusDisabled?: boolean;
  minusDisabled?: boolean;
}

const CartAddingButtons = ({productQuantity, onIncrese, onDecrese, plusDisabled, minusDisabled}: Props) => {
  return (
    <div className={cls.add_buttons}>
      <Button onClick={onDecrese} disabled={minusDisabled}>
        <MinusIcon />
      </Button>

      <Text
        className={cls.add_buttons_amount}
        variant="dark"
        size="xs"
      >
        {productQuantity}
      </Text>

      <Button onClick={onIncrese} disabled={plusDisabled}>
        <PlusIcon />
      </Button>
    </div>
  );
};

export default CartAddingButtons;
