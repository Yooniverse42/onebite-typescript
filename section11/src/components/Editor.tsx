import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeInput} />
      <button onClick={onClickAdd}>추가</button>
    </div>
  );
}
