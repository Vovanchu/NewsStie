import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

// Типи для useSelector / useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
