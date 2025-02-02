import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <Link to="/">
                <h1>구미공실현황</h1>
            </Link>
        </>
    );
}

export default Header;