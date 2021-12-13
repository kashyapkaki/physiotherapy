import React from 'react'

function Tiles({title, content, list}) {
    return (
        <div className="tiles">
            <div className="tiles__header">{title}</div>
           {content !== "" && list.length <= 1
                ? <div className="tiles__content text-left">{content}</div>
                : ""
            }
            {content !== "" && list.length > 1 
            ?
            <div className="tiles__list-container">
                <ul className="tiles__list">
                {list.map((element) => {
                    return (
                    <li className="tiles__item">{element}</li>
                )})}      
                </ul>
            </div>
            : ""}
        </div>
    )
}

export default Tiles
