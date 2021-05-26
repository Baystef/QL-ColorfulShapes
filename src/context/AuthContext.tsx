import { useContext, useState, createContext, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser, AuthContextValue } from '../types';


const initialState = {
  signin: (data: IUser) => { },
  logout: () => true,
  user: {},
  authenticated: false
}

const userBase: IUser[] = [{ userName: 'solomon', password: 'grandy' }]

export const AuthContext = createContext<AuthContextValue>(initialState);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem('QL-Auth') || '{}') || false);
  const history = useHistory();
 
  const signin = (userdata: IUser) => {
    const res = userBase.find(({ userName, password }: IUser) => (userName === userdata.userName.toLowerCase() && password === userdata.password.toLowerCase()))
    if (typeof res === 'object' && res !== null) {
      localStorage.setItem('QL-Auth', JSON.stringify(true))
      setUser(res);
      setAuthenticated(true);
      history.push('/home')
    }
  }

  const logout = (): boolean => {
    localStorage.removeItem('QL-Auth');
    setAuthenticated(false);
    return true
  }

  return (
    <AuthContext.Provider value={{ signin, logout, user, authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
