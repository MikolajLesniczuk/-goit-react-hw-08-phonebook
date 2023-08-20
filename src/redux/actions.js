import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/FETCH',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/ADD',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/DELETE',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/REGISTER',
  async (registerData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', registerData);
      setHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/LOGIN',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginData);
      setHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'AUTH/REFRESH_USER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setHeader(token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/LOGOUT', async (_, thunkAPI) => {
  try {
    // eslint-disable-next-line
    const response = await axios.post('/users/logout');
    removeToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
