import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../actions/userAction';
import UsersUpdate from './UsersUpdate';
import Form from './Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getData());
  }, [currentId, dispatch]);

  return (
    <div>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
        <UsersUpdate setCurrentId={setCurrentId}/>   
      </div>
  );
};

export default Home;