import React from 'react';
import { Link } from 'react-router-dom';
const NavItem = (props) => {
    return (
        <>
        { props.id && props.id == 'active' ? (
            <Link className="navLink active" to={props.link} key={props?.key}>{props.children}</Link>
  
        ) : (
            <Link className="navLink" to={props.link} key={props?.key}>{props.children}</Link>
        )}
        </>
    )
}
export default NavItem;