import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/actions';
import s from './register.module.css';
export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleChangeName = e => {
    const data = e.target.value;
    setName(data);
  };
  const handleChangeEmail = e => {
    const data = e.target.value;
    setEmail(data);
  };
  const handleChangePassword = e => {
    const data = e.target.value;
    setPassword(data);
  };

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = document.getElementById('toggleButton');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Hide password';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Show password';
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name: name, email: email, password: password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <p className={s.p}>
        You don`t have accout yet? Please Register to entry the magic phonebook
      </p>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.div}>
          <label className={s.label}>
            {' '}
            Your name
            <input
              className={s.email}
              //   value={name}
              type="text"
              name="name"
              onChange={handleChangeName}
            />
          </label>
        </div>
        <div className={s.div}>
          <label className={s.label}>
            {' '}
            Your Email
            <input
              className={s.email}
              type="email"
              name="email"
              // placeholder="Your email"
              onChange={handleChangeEmail}
            />
          </label>{' '}
        </div>
        <div className={s.div}>
          <label className={s.label}>
            {' '}
            Your password
            <input
              id="passwordInput"
              className={s.password}
              type="password"
              name="password"
              // placeholder="Your password"
              onChange={handleChangePassword}
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

        <button className={s.butonregister}>Register</button>
        {/* <p>------</p>
        <div>
          <input
            type="password"
            id="passwordInput"
            name="password"
            placeholder="Your password"
          />
          <button
            type="button"
            id="toggleButton"
            onClick={togglePasswordVisibility}
          >
            Show
          </button>
        </div> */}
      </form>
    </div>
  );
};
