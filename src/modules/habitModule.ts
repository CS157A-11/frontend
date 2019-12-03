import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "../configureStore";
import { HTTP } from "../axiosSetting";

export interface HabitType {
  id: number;
  name: string;
  is_active: boolean;
}

export interface CompletedHabitType {
  habit_id: number;
  email: string;
  completed_date: string;
}

export interface HabitState {
  isInitializing: boolean;
  habits: HabitType[];
  completedHabits: CompletedHabitType[];
}

const initialState: HabitState = {
  isInitializing: false,
  habits: [],
  completedHabits: []
};

const habitModule = createSlice({
  initialState,
  reducers: {
    initilizingAction: (state: HabitState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload;
    },
    getHabitsAction: (
      state: HabitState,
      action: PayloadAction<HabitType[]>
    ) => {
      console.log(action.payload);
      state.habits = action.payload;
    },
    getCompletedHabitsAction: (
      state: HabitState,
      action: PayloadAction<CompletedHabitType[]>
    ) => {
      console.log(action.payload);
      state.completedHabits = action.payload;
    }
  }
});

export const { actions: habitAction } = habitModule;
export default habitModule;

export const fetchHabits = (): AppThunk => async dispatch => {
  try {
    await HTTP.get("/habits")
      .then(response => {
        console.log(response);
        dispatch(habitAction.getHabitsAction(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const fetchCompletedHabits = (): AppThunk => async dispatch => {
  try {
    await HTTP.get("/completehabits")
      .then(response => {
        dispatch(habitAction.getCompletedHabitsAction(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const createCompletedHabits = (newCompleteHabit: {
  habit_id: number;
  completed_date: Date;
}): AppThunk => async dispatch => {
  console.log(newCompleteHabit);
  try {
    await HTTP.post("/completehabits", newCompleteHabit)
      .then(() => {
        dispatch(fetchCompletedHabits());
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};
