import { useState, FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';
import { InputEvent } from '../../types';
import './Login.css';

const Login = () => {
  const [state, setState] = useState({ userName: 'solomon', password: 'grandy' })
  const { signin } = useAuth();
 
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    signin(state)
  }

  const onChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setState(prevState => ({...prevState, [name]: value }))
  }

  return (
    <div className="wrapper">
      <div className="container-login">
        <div className="login-form--body">
          <form onSubmit={onSubmit} className="login-form">
            <span className="login-form--title p-b-26">
              SH&#9650;PES
            </span>
            <span className="login-form--title p-b-40">
              <img src="/shapes.png" style={{ width: '150px', height: '150px' }} alt="shapes logo" />
            </span>

            <div className="login-form--input">
              <input onChange={onChange} value={state.userName} className="input" type="text" name="userName" data-testid="userName" required />
              <span className="focus-input" data-placeholder=""></span>
            </div>

            <div className="login-form--input">
              <input onChange={onChange} value={state.password} className="input" type="password" name="password" data-testid="password" required />
              <span className="focus-input" data-placeholder=""></span>
            </div>

            <div className="container-login-form--btn">
              <div className="subcon-login-form--btn">
                <div className="login-form--bgbtn"></div>
                <button type="submit" className="login-form--btn">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Login };
