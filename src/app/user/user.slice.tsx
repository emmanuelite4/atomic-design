import { createSlice } from "@reduxjs/toolkit";

interface State {
  full_name: string;
  isLogged: boolean;
  error: string;
  loading: boolean;
}

const initialState: State = {
  full_name: "",
  isLogged: false,
  error: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state, action) => {},
    signupStart: (state, action) => {},
  },
});

export default userSlice.reducer;

export const { loginStart, signupStart } = userSlice.actions;
