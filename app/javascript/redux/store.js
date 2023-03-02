import { configureStore } from '@reduxjs/toolkit';
import reducer from '../components/gretingSlice';

export default configureStore({
  reducer: {
    greeting: reducer,
  },
});
