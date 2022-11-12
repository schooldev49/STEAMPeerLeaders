import React from 'react';
import {Link} from 'react-router-dom';

const MonthlyChallengeListing = (props) => {
    const name = props.name;
    const fakename = props.officialName;
    return (
        <React.Fragment>
            <li className="monthlychallenge">
                <Link to={name}>{fakename}</Link>
            </li>
        </React.Fragment>
    )
} 

export default MonthlyChallengeListing;