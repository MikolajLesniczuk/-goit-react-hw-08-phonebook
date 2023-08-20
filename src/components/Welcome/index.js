import s from './home.module.css';

export const MainPage = () => {
  return (
    <div>
      <div className={s.title}>Welcome to Phonebook</div>
      <div className={s.account}>
        Do You Have accout? Please Login to the your`s magic phonebook!
      </div>
    </div>
  );
};
