import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { signupStart } from "../../app/user/user.slice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    dispatch(signupStart(values));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder={"Username"} />
      <Input placeholder={"Password"} type={"password"} />
      <Input placeholder={"Confirm Password"} type={"password"} />
      <Button label={"Sign up"} />
    </form>
  );
};

export default SignUpForm;
