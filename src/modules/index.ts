import { AppState } from "./appModule";
import { UserState } from "./userModule";

export interface RootState {
  app: AppState;
  user: UserState;
}
