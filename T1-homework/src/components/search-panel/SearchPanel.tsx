import {Button} from "components/shared/buttons/Button";
import Input from "components/shared/input/Input";
import {Text} from "components/shared/text/Text";
import cls from './SearchPanel.module.scss';

type Props = {
  onClick?: () => void;
  onChange?: (text: string) => void;
  disabled?: boolean;
}
const SearchPanel = ({onClick, onChange, disabled}: Props) => {
  return (
    <div className={cls.wrapper}>
      <Input type="text" placeholder="Search by title" onChange={onChange} />
      <Button size="xl" onClick={onClick} disabled={disabled}>
        <Text>
          Search
        </Text>
      </Button>
    </div>
  );
};

export default SearchPanel;
