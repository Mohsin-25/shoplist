import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";

export const mainReducer = combineReducers({ shopReducer });
