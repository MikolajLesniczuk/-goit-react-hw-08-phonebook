import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';
export const NavigationLogout = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Phonebook</div>
      <div className={s.flexrow}>
        <NavLink className={s.navlink} to="/login">
          Log in
        </NavLink>

        <NavLink className={s.navlink} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};
