import React from 'react';
import Navbar from '../../components/nav/Navbar';
const AdminPage = (props) => {
    let user = props.user;
    return (
        <div className="App">
            <Navbar/>
            <h1>
               Hello, {user.displayName}! Your email is {user.email}
            </h1>
        </div>

    )
}
export default AdminPage;