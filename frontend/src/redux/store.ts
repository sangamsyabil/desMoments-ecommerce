import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '.';

const store = configureStore({
  reducer: rootReducer,
  devTools:
    process.env.NODE_ENV === 'development'
      ? {
          name: 'desMoments',
        }
      : false,
});

export type RootState = ReturnType<typeof rootReducer>;
export { store };
