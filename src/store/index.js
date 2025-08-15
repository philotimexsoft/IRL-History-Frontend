"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {UserReducer, UserProfileReducer} from "./Reducers/UserReducer/Reducer"

const store = configureStore({
  reducer: {
    user: UserReducer,
    userprofile_manage: UserProfileReducer
  },
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
