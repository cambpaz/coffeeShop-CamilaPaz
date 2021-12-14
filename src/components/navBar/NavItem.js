import React from 'react';
import {navItem} from './navbar.module.scss'

export const NavItem = ({text}) => {
    return (
        <>
            <li className={navItem}>
                <p>{text}</p>
            </li>
        </>
    )
}
