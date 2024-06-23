import {Button} from "components/shared/buttons/Button";
import Input from "components/shared/input/Input";
import {Text} from "components/shared/text/Text";
import {ChangeEvent} from "react";
import cls from './SearchPanel.module.scss';

type Props = {
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchPanel = ({onClick, onChange}: Props) => {
  return (
    <div className={cls.wrapper}>
      <Input type="text" placeholder="Search by title" onChange={onChange} />
      <Button size="xl" onClick={onClick}>
        <Text>
          Search
        </Text>
      </Button>
    </div>
  );
};

export default SearchPanel;
