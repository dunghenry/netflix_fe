import { createSlice } from '@reduxjs/toolkit';
import {
    getGenres,
    fetchMovies,
    fetchDataByGenre,
} from '../actions/netflixActions';
const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
    error: false,
};
const netflixSlice = createSlice({
    name: 'netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.pending, (state) => {
            state.genresLoaded = true;
        });
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genresLoaded = false;
            state.genres = action.payload;
        });
        builder.addCase(getGenres.rejected, (state) => {
            state.genresLoaded = false;
            state.error = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
        builder.addCase(fetchDataByGenre.pending, (state) => {
            state.genresLoaded = true;
        });
        builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
            state.genresLoaded = false;
            state.movies = action.payload;
        });
        builder.addCase(fetchDataByGenre.rejected, (state) => {
            state.genresLoaded = false;
            state.error = true;
        });
    },
});
const netflixReducer = netflixSlice.reducer;

export default netflixReducer;
