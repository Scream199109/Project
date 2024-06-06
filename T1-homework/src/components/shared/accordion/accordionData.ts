export type FAQDataType = {
  question: string;
  answer: string;
  id: string;
}

const data: FAQDataType[] = [
  {
    question: "Question 1",
    answer:
      "Long answer to the first question",
    id: '1'
  },
  {
    question: "Question 2",
    answer:
      "Long answer to the second question",
    id: '2'
  }
];

export default data;
