import React from 'react'
import { Link } from 'react-router-dom';

function Dropdown({parentRoute, items}) {
    return (
    <div className="dropdown">
        {items.map(element => {
            return (
                <Link to={`/${parentRoute}/${element}`}>{element}</Link>
            )
        })}
    </div>
    )
}

export default Dropdown