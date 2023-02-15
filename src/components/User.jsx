import { useSelector, useDispatch } from 'react-redux';
import { updateUserfirstname, updateUserlastName, updateUseremail } from '../store/usersSlice';
import React, { useState } from 'react';
import '../styles/User.css';

function User({ name, email }) {
  const [firstName, setFirstName] = useState(name.first);
  const [lastName, setLastName] = useState(name.last);
  const [newEmail, setNewEmail] = useState(email);
  const dispatch = useDispatch();

  function handleSave() {
    dispatch(updateUserfirstname(firstName));
    dispatch(updateUserlastName(lastName));
    dispatch(updateUseremail(newEmail));
  }

  return (
    <div className="user-container">
      <h2 className="welcome-message">Hi, {firstName}!</h2>
      <h4 className="welcome-message">Costumize your profile here</h4>
      <div className="user-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default User;