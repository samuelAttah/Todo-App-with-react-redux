import { createStore } from "redux";
import rootReducer from "./reducers";
import { initialState } from "./initialState";

// const persistedState = {
//   todos: [{ id: 1, text: "hello", completed: false }],
// };

const configureStore =
  //   const composeEnhancers =
  //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
