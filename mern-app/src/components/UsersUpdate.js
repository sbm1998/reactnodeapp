import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../actions/userAction'
const Users = ({ setCurrentId }) => {
  const dispatch = useDispatch()
  const records = useSelector((state) => state.users);
  
  const recordFields = records.length > 0 ? Object.keys(records[0]) : [];
  console.log(recordFields)
  //
  return (
    <div>
      {!records[0] ? "No Record Found": <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>City</td>
          </tr>
          {records.map((user) => (
            <tr key={user.id}> {recordFields.map((field) =>( <td key={`${user.id}-${field}`}> {typeof user[field] === "object"? JSON.stringify(user[field]): user[field]} </td> ))}
            <input type="button" Value="Edit" onClick={() => setCurrentId(user._id)} /> <br/>
            <input type="button" Value="Delete" onClick={() => dispatch(deleteData(user._id))} /><br/>
            </tr>
          ))}
        </tbody>
      </table>}
      </div>
  );
};

export default Users;