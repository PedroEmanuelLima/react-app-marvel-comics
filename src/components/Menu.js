import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Navbar,
    Container
} from 'reactstrap';

import './styles.css';
import logo from '../assets/img/marvel-logo-comics.svg';

export const Menu = () => {
    return (
        <div className="mb-4">
            <Navbar className="nav-read" dark expand="md">
                <Container>
                    <NavLink to={"/"}>
                        <img src={logo} alt="Logo" />
                    </NavLink>
                </Container>
            </Navbar>
        </div>
    );
};