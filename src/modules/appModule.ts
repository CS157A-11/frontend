import { createSlice, PayloadAction } from "redux-starter-kit";

export interface AppState {
  isInitializing: boolean;
  isAuthenticated: boolean;
}

const initialState: AppState = {
  isInitializing: false,
  isAuthenticated: false
};

const appModule = createSlice({
  initialState,
  reducers: {
    initilizingAction: (state: AppState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload;
    },
    setIsAuthenticated: (state: AppState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { actions: appActions } = appModule;
export default appModule;
