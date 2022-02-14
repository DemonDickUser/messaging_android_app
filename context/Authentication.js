import {createContext} from 'react';

const authContext = createContext({
  userId: '',
  setUserId: newUserId => {},
});

export default authContext;
