const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
