import { FC } from "react";
import { InputProps } from "./index.d";

const Input: FC<InputProps> = (props) => {
  const { placeholder, type, onChange } = props;
  return (
    <input
      className={"border-2 px-4 py-2 outline-none w-full my-4 rounded-full"}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
