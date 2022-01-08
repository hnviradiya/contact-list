import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const sampleReducer = (state = { value: 0 }, action: { type: string }) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
