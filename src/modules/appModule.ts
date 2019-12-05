import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "../configureStore";
import axios from "axios";

export interface AppState {
  isInitializing: boolean;
  emp: {
    id: number;
    name: string;
    age: number;
  }[];
}

const initialState: AppState = {
  isInitializing: false,
  emp: []
};

const appModule = createSlice({
  initialState,
  reducers: {
    initilizingAction: (state: AppState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload;
    },
    getEmp: (
      state: AppState,
      action: PayloadAction<
        {
          id: number;
          name: string;
          age: number;
        }[]
      >
    ) => {
      state.emp = action.payload;
    }
  }
});

export const { actions: appActions } = appModule;
export default appModule;

export const fetchEmp = (): AppThunk => async dispatch => {
  try {
    await axios
      .get("http://localhost:3000/api/v1/test/")
      .then(response => {
        dispatch(appActions.getEmp(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {}
};
