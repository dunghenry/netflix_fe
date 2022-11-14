import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import PageNotFound from './pages/PageNotFound';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
const App = () => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     (async () => {
    //         const res = await axios.get('http://localhost:4000');
    //         console.log(res.data);
    //     })();
    // }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/player" element={<Player />} />
                <Route exact path="/movies" element={<Movies />} />
                <Route exact path="/tv" element={<TVShows />} />
                <Route exact path="/" element={<Netflix />} />
                <Route exact path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
