import  { configureStore }  from   '@reduxjs/toolkit' ;
import greetingSlice  from   '../components/gretingSlice' ;
export const store = configureStore({
    reducer: {
        greeting: greetingSlice,
    },
});
