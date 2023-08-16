import React from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const inputValue = e.target.value;
    dispatch(setStatusFilter(inputValue));
  };

  return (
    <div>
      <p className={s.find}>Find contacts by name :</p>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="search contacts..."
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export { Filter };
