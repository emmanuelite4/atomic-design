import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const SignUpForm = () => {
  return (
    <div>
      <Input placeholder={"Username"} />
      <Input placeholder={"Password"} type={"password"} />
      <Input placeholder={"Confirm Password"} type={"password"} />
      <Button label={"Sign up"} />
    </div>
  );
};

export default SignUpForm;
