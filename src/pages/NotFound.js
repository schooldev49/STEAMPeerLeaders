import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/nav/Navbar';

const NotFound = () => {
    return (
        <>
            <div className="App">
                <Navbar/>
                <h1>404 - Not Found</h1>
                <h2>Go <Link to="/">home</Link></h2>
            </div>

        </>
    )
}
export default NotFound;