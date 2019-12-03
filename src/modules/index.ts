import { AppState } from "./appModule";
import { UserState } from "./userModule";
import { HabitState } from "./habitModule";
import { MoodState } from "./moodModule";

export interface RootState {
  app: AppState;
  user: UserState;
  habit: HabitState;
  mood: MoodState;
}
