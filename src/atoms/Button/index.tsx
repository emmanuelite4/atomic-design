import { FC } from "react";
import { Props } from "./index.d";

const Button: FC<Props> = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={"bg-blue-900 text-white px-10 py-2 rounded-full "}
    >
      {label}
    </button>
  );
};

export default Button;
