import { useSelector, useDispatch } from 'react-redux';
import { updateUserfirstname, updateUserlastName, updateUseremail } from '../store/usersSlice';
import React, { useState } from 'react';
import { WelcomeMessage, WelcomeMessage2, FormGroup, Input} from '../styles/User'
import {Button, Label, Container} from '../styles/Global'

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
    <Container>
      <WelcomeMessage>Hi, {firstName}!</WelcomeMessage>
      <WelcomeMessage2>Costumize your profile here</WelcomeMessage2>
      <div>
        <FormGroup>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address:</Label>
          <Input
            id="email"
            type="email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </FormGroup>
        <Button className="btn" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Container>
  );
}

export default User;