import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  // ...reducers
});

const configureStore = {
  key: "root",
  storage,
  whitelist: ["cartData"],
};

export default persistReducer(configureStore, rootReducer);
