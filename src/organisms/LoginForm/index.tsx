import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { loginStart } from "../../app/user/user.slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    dispatch(loginStart(values));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder={"Username"} />
      <Input placeholder={"Password"} type={"password"} />
      <Button label={"Login"} />
    </form>
  );
};

export default LoginForm;
