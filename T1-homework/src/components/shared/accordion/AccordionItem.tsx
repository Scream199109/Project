import PlusIconThin from "assets/icons/PlusIconThin";
import {useRef} from "react";
import {classNames} from "../lib/classNames/classNames";
import {Text} from "../text/Text";
import cls from './Accordion.module.scss';
import {FAQDataType} from "./accordionData";

type Props = {
  isOpen: boolean;
  onClick: () => void;
} & Pick<FAQDataType, 'answer' | 'question'>

const AccordionItem = ({question, answer, isOpen, onClick}: Props) => {
  const contentHeight = useRef<null | HTMLDivElement>(null);
  return (
    <div className={cls.wrapper}>
      <button
        className={
          classNames(cls.question_container, {[cls.active]: isOpen})
        }
        onClick={onClick}
      >
        <Text>{question}</Text>
        <span className={classNames(cls.plus_button, {[cls.active]: isOpen})}>
          <PlusIconThin />
        </span>
      </button>

      <div
        ref={contentHeight}
        className={cls.answer_container}
        style={
          isOpen
            ? {height: contentHeight.current?.scrollHeight}
            : {height: "0px"}
        }
      >
        <Text className={cls.answer_content} weight="semi_bold">{answer}</Text>
      </div>
    </div>
  );
};

export default AccordionItem;
