import React from 'react'

export const NavItem = ({text}) => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link">{text}</a>
            </li>
        </>
    )
}
