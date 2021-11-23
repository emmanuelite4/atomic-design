import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const SearchField = () => {
  return (
    <div className={"flex gap-10 items-center"}>
      <Input placeholder={"Search..."} />
      <Button label={"Search"} />
    </div>
  );
};

export default SearchField;
