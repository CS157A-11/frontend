import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "../configureStore";
import { HTTP } from "../axiosSetting";

export interface MoodType {
  name: string;
  weight: number;
}

export interface MoodOfTheDayType {
  habit_id: number;
  date: string;
  mood_name: string;
}

export interface MoodState {
  isInitializing: boolean;
  moodOfTheDayList: MoodOfTheDayType[];
  availableMoods: MoodType[];
}

const initialState: MoodState = {
  isInitializing: false,
  moodOfTheDayList: [],
  availableMoods: []
};

const moodModule = createSlice({
  initialState,
  reducers: {
    initilizingAction: (state: MoodState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload;
    },
    getAvailableMoods: (
      state: MoodState,
      action: PayloadAction<MoodType[]>
    ) => {
      console.log(action.payload);
      state.availableMoods = action.payload;
    },
    getMoodOfTheDayList: (
      state: MoodState,
      action: PayloadAction<MoodOfTheDayType[]>
    ) => {
      console.log(action.payload);
      state.moodOfTheDayList = action.payload;
    }
  }
});

export const { actions: moodAction } = moodModule;
export default moodModule;

export const fetchAvailableMoods = (): AppThunk => async dispatch => {
  try {
    await HTTP.get("/moodoftheday/availablemoods")
      .then(response => {
        console.log(response);
        dispatch(moodAction.getAvailableMoods(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const fetchMoodOfTheDayList = (): AppThunk => async dispatch => {
  try {
    await HTTP.get("/moodoftheday")
      .then(response => {
        console.log("1", response.data);
        dispatch(moodAction.getMoodOfTheDayList(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const createMoodOfTheDay = (newMood: {
  mood_name: string;
  date: Date;
}): AppThunk => async dispatch => {
  console.log(newMood);
  try {
    await HTTP.post("/moodoftheday", newMood)
      .then(() => {
        dispatch(fetchMoodOfTheDayList());
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};
