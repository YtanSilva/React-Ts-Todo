import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddTodo = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState<string>("");

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && inputText != "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <S.Container>
      <div className='plus'>➕</div>
      <input
        type='text'
        placeholder="insert yours todo's"
        value={inputText}
        onKeyUp={handleKeyUp}
        onChange={(e) => setInputText(e.target.value)}
      />
    </S.Container>
  );
};

export default AddTodo;
