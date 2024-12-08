import React, { CSSProperties, FC } from "react";
type PropsType = {
  text: string;
  isCenter?: boolean;
};
const QuestionParagraph: FC<PropsType> = ({ text, isCenter }) => {
  const style: CSSProperties = {};
  if (isCenter) {
    style.textAlign = "center";
  }
  // 换行
  const textList = text.split("\n");
  return (
    <p>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </p>
  );
};
export default QuestionParagraph;
