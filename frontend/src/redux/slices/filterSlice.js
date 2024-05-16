import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // Immer library - mutate state
            state.title = action.payload;

            // You can also return new state as usually
            // return {...state, title: action.playload };
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },
        setFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        resetFilters: () => {
            return initialState;
        }
    }
});

export const { setTitleFilter, resetFilters, setAuthorFilter, setFavoriteFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;