import { PayloadAction, createSlice } from "redux-starter-kit";

export interface User {
  name: string;
  email: string;
}

export interface UserState {
  isInitializing: boolean;
  user: User;
}

const initialState: UserState = {
  isInitializing: false,
  user: { name: "", email: "" }
};

const userModule = createSlice({
  initialState,
  reducers: {
    initilizingAction: (state: UserState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload;
    },
    getUser: (
      state: UserState,
      action: PayloadAction<{
        name: string;
        email: string;
      }>
    ) => {
      state.user = action.payload;
    }
  }
});

export const { actions: userActions } = userModule;
export default userModule;
