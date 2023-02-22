import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import NavBar from '../Pages/NavBar/NavBar';
import TopBar from '../Pages/TopBar/TopBar';

const Main = () => {
    return (
        <div>
            <TopBar></TopBar>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;