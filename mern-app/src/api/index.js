import axios from 'axios';

const url = 'http://localhost:8080/api';
//
// url.interceptors.request.use((req) => {
//         if (localStorage.getItem('profile')) {
//           req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//         }
      
//         return req;
//       });

export const getData = ()=>axios.get(url);
export const createData = (newData) => 
        axios.post(url, newData);
export const updateData = (id, updatedData) =>
        axios.patch(`${url}/${id}`, updatedData);
export const deleteData = (id) => 
        axios.delete(`${url}/${id}`);
export const signIn = (formData) => 
        url.post('/user/signin', formData);
export const signUp = (formData) => 
        url.post('/user/signup', formData);
