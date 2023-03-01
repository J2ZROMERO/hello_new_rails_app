import { useSelector, useDispatch  } from 'react-redux';
import React, { useEffect } from 'react';
import { getmsn} from './gretingSlice';


const App = () => {
    
    const message = useSelector((state) => state.greeting.message);
    
    
    const dispatch  = useDispatch();  
    useEffect(() => {
        dispatch(getmsn());
    }, [dispatch]);
    
  
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
};

export default App;

