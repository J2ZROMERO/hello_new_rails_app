import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getmsn } from './gretingSlice';

const Greeting = () => {
  const message = useSelector((state) => state.greeting.message);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmsn());
  }, [dispatch]);

  return (

    <h1>{message}</h1>

  );
};

export default Greeting;
