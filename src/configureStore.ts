import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Action
} from "redux-starter-kit";
import appModule from "./modules/appModule";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./modules";
import userModule from "./modules/userModule";
import habitModule from "./modules/habitModule";
import moodModule from "./modules/moodModule";
import todoModule from "./modules/todoModule";

const rootReducer = combineReducers({
  app: appModule.reducer,
  user: userModule.reducer,
  habit: habitModule.reducer,
  mood: moodModule.reducer,
  todo: todoModule.reducer
});

const store = configureStore({
  reducer: rootReducer,
  ...getDefaultMiddleware()
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
