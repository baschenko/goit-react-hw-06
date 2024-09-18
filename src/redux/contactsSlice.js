import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    delContact: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
