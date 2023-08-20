import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/actions';
import s from './usermenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(state => state.auth.user.name);
  const mail = useSelector(state => state.auth.user.email);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className={s.flex}>
      <div className={s.welcome}>Welcome to the Phonebook, {name}</div>
      <div>
        <p className={s.mail}>{mail}</p>
        <button className={s.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
