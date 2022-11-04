import React from 'react';
const ABUserLayout = (props) => {
    return (
        <React.Fragment>
            <li>
                <a className="nameUrl" href={props.email}>{props.children}</a>
            </li>
        </React.Fragment>
    )
}

export default ABUserLayout;
//export default ABUserLayout;