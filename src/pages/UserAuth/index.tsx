import Login from "../../templates/Login";
import SignUp from "../../templates/SignUp";
import SearchField from "../../molecules/SearchField";

const UserAuth = () => {
  return (
    <div className={"p-20"}>
      <SearchField />
      <div className={"grid grid-cols-2 gap-20 "}>
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default UserAuth;
