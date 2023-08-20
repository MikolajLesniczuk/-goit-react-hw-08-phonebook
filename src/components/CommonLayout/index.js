import { NavigationLogout } from 'components/Routy/Navigation';
import { NavigationLogin } from 'components/Routy/Navigation/navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const CommonLayout = () => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <div>
      <div>{isLogged ? <NavigationLogin /> : <NavigationLogout />}</div>
      <Outlet />
    </div>
  );
};
