import React from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div className={'navbar'}>
            <div className={'navbar__leftside'}>
                <NavLink to={'/'} className={'navbar__log-name'}>
                    RPDForms
                </NavLink>
                <NavLink to={'/'} className={'navbar__link'}>
                    Основной документ
                </NavLink>
                <NavLink to={'/load'} className={'navbar__link'}>
                    Загрузка УП
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;