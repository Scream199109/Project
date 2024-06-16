import MinusIcon from "assets/icons/MinusIcon";
import PlusIcon from "assets/icons/PlusIcon";
import {Button} from "components/shared/buttons/Button";
import Input from "components/shared/input/Input";
import cls from './CartPage.module.scss';

type Props = {
  productQuantity?: number;
}

const CartAddingButtons = ({productQuantity}: Props) => {
  return (
    <div className={cls.add_buttons}>
      <Button>
        <MinusIcon />
      </Button>

      <Input type="text" className={cls.add_buttons_amount} defaultValue={productQuantity} />

      <Button>
        <PlusIcon />
      </Button>
    </div>
  );
};

export default CartAddingButtons;
