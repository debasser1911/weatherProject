import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({ weatherReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
