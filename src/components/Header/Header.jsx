import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center'>Hello <span className='text-primary'>Foodies</span></h2>
            <Link to="/emni">Emni</Link>
        </div>
    );
};

export default Header;