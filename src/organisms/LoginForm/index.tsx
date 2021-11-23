import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const LoginForm = () => {
  return (
    <div>
      <Input placeholder={"Username"} />
      <Input placeholder={"Password"} type={"password"} />
      <Button label={"Login"} />
    </div>
  );
};

export default LoginForm;
