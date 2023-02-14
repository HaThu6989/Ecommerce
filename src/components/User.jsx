import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';
import { useEffect } from 'react';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  console.log(user)


  return (
    <div>
          <h2>user list</h2>
          <button onClick={() => dispatch(fetchUsers(user))}>Users list</button>

        {user.map(elem => (
            <li>{elem.username}</li>
        ))}
    </div>
  );
};

export default User;
