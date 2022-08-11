import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Main;
