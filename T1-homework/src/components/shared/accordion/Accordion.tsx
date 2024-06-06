import {useState} from "react";
import {Text} from "../text/Text";
import cls from './Accordion.module.scss';
import AccordionItem from "./AccordionItem";
import data from "./accordionData";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<string[]>([]);

  const handleItemClick = (id: string) => {
    if (activeIndex.includes(id)) {
      setActiveIndex(activeIndex.filter(item => item !== id))
    } else {
      setActiveIndex([...activeIndex, id])
    }
  };

  return (
    <div className={cls.container} id="faq">
      <div className={cls.title}>
        <Text size="xl" weight="bold">
          FAQ
        </Text>
      </div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={!!activeIndex.find(id => id === item.id)}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
