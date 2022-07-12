import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userDataAction } from './redux_store/action_creators';
import './styles.css';

export default function App() {
  const dispatch = useDispatch();
  const [useData, setUserdata] = useState([]);
  const state = useSelector((state) => state);
  // console.log(data, "dd");
  console.log(state);

  useEffect(() => {
    dispatch(userDataAction());
    // console.log(data, "app");
  }, []);

  useEffect(() => {
    setUserdata(state);
  }, []);

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      {state?.page?.data?.data.map((user, i) => (
        <div key={i}>
          <tr>{user.email}</tr>
        </div>
      ))}
    </div>
  );
}
