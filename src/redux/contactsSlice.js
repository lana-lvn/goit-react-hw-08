import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const initialState = {
    items: [],
    isLoading: false,
    isError: false,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;

            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                state.isError = action.payload;
                state.isLoading = false;
            });
    },

});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;


export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
});