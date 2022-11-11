import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:4000');
            console.log(res.data);
        })();
    }, []);
    return <div>App</div>;
};
export default App;
