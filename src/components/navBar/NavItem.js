import React from 'react'

export const NavItem = ({text}) => {
    return (
        <>
            <li className="nav-item">
                <p className="nav-link">{text}</p>
            </li>
        </>
    )
}
