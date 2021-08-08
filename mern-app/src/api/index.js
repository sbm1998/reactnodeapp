import axios from 'axios';

const url = 'http://localhost:8080/api';

export const getData = ()=>axios.get(url);
export const createData = (newData) => 
        axios.post(url, newData);
export const updateData = (id, updatedData) =>
        axios.patch(`${url}/${id}`, updatedData);
export const deleteData = (id) => 
        axios.delete(`${url}/${id}`);
