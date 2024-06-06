import {Button} from "components/shared/buttons/Button";
import Input from "components/shared/input/Input";
import {Text} from "components/shared/text/Text";
import cls from './SearchPanel.module.scss';

type Props = {
  onClick?: () => void;
}
const SearchPanel = ({onClick}: Props) => {
  return (
    <div className={cls.wrapper}>
      <Input type="text" placeholder="Search by title" />
      <Button size="xl" >
        <Text>
          Search
        </Text>
      </Button>
    </div>
  );
};

export default SearchPanel;
