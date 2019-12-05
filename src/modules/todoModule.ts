import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "../configureStore";
import { HTTP } from "../axiosSetting";

export interface TodoType {
  id: number;
  name: string;
  is_active: boolean;
}

export interface CompletedTodoType {
  todo_id: number;
  email: string;
  completed_date: string;
}

export interface TodoState {
  isInitializing: boolean;
  todos: TodoType[];
  completedTodos: CompletedTodoType[];
}

const initialState: TodoState = {
  isInitializing: false,
  todos: [],
  completedTodos: []
};

const todoModule = createSlice({
  initialState,
  reducers: {
    initilizingAction: (state: TodoState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload;
    },
    getTodosAction: (state: TodoState, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },
    getCompletedTodosAction: (
      state: TodoState,
      action: PayloadAction<CompletedTodoType[]>
    ) => {
      state.completedTodos = action.payload;
    }
  }
});

export const { actions: todoAction } = todoModule;
export default todoModule;

export const fetchTodos = (): AppThunk => async dispatch => {
  try {
    await HTTP.get("/todos")
      .then(response => {
        console.log(response);
        dispatch(todoAction.getTodosAction(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const fetchCompletedTodos = (): AppThunk => async dispatch => {
  try {
    await HTTP.get("/completetodos")
      .then(response => {
        dispatch(todoAction.getCompletedTodosAction(response.data));
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const createCompletedTodos = (newCompleteTodo: {
  todo_id: number;
  completed_date: Date;
}): AppThunk => async dispatch => {
  console.log(newCompleteTodo);
  try {
    await HTTP.post("/completetodos", newCompleteTodo)
      .then(() => {
        dispatch(fetchCompletedTodos());
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const updateIsActive = (todo: {
  todo_id: number;
  is_active: boolean;
}): AppThunk => async dispatch => {
  try {
    console.log("UPDATE", todo);
    await HTTP.put("/todos/updateIsActive", todo)
      .then(() => {
        dispatch(fetchTodos());
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};

export const createTodo = (todo: {
  name: string;
  is_active: boolean;
}): AppThunk => async dispatch => {
  try {
    await HTTP.post("/todos", todo)
      .then(() => {
        dispatch(fetchTodos());
      })
      .catch(response => {
        console.log(response);
      });
  } catch (err) {
    throw err;
  }
};
