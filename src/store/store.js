import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from '../api/apiSlice';
import filters from '../features/workersFilter/WorkersFilterSlice';

const store = configureStore({
  reducer: {filters,
            [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
