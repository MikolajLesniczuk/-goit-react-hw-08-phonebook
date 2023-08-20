import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './login.module.css';
import { login } from 'redux/actions';
import { MainPage } from 'components/Welcome';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = document.getElementById('toggleButton');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Show Password';
    }
  }
  return (
    <div>
      <MainPage />
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.div}>
          <label className={s.label}>
            {' '}
            Email :
            <input
              autoComplete="off"
              className={s.email}
              type="email"
              name="email"
              // placeholder="Your email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={s.div}>
          <label className={s.labelpass}>
            Password :
            <input
              className={s.password}
              type="password"
              name="password"
              id="passwordInput"
              // placeholder="Your password"
              onChange={handlePassword}
            />
            <button
              className={s.butonshow}
              type="button"
              id="toggleButton"
              onClick={togglePasswordVisibility}
            >
              Show Password
            </button>
          </label>
        </div>

        <button className={s.butonlogin} type="submit">
          {' '}
          Login
        </button>
      </form>
    </div>
  );
};
