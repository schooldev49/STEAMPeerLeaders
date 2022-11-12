import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/nav/Navbar';

const NotFound = () => {
    return (
        <>
            <div className="App">
                <Navbar/>
                <h1 className="nf">404 - Not Found. <br/>Go <Link to='/'>Home</Link></h1>
                
            </div>

        </>
    )
}
export default NotFound;