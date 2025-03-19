import { ReactElement, useState } from "react";
interface Props {
  onClickAdd: (text: string) => void;
  children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeInput} />
      <button onClick={onClickAdd}>추가</button>
    </div>
  );
}
