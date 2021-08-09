import {CREATE,FETCH_ALL, UPDATE, DELETE,} from './index';

import * as api from '../api/index.js';

export const getData = () => 
  async (dispatch) => {
  try {
    const { data } = await api.getData();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
//
export const createData = (userdata) =>
   async (dispatch) => {
  try {
    const { data } = await api.createData(userdata);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateData = (id, newdata) => 
    async (dispatch) => {
  try {
    const { data } = await api.updateData(id, newdata);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = (id) => 
    async (dispatch) => {
  try {
    await api.deleteData(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


