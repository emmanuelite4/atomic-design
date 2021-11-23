import React from "react";
import { Provider } from "react-redux";
import UserAuth from "../pages/UserAuth";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <UserAuth />
    </Provider>
  );
}

export default App;
