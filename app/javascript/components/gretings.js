import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/api/hello");
      const data = await response.json();
      setGreeting(data.message);
      
    };

    fetchData();
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;
