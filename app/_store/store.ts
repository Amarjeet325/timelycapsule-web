import { configureStore } from "@reduxjs/toolkit";
import capsuleReducer from "./capsuleSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    capsules: capsuleReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
