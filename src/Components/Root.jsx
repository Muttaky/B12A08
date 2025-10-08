import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';
const Root = () => {
    let [soft,setSoft]=useState(()=>{
        let savedSoft=localStorage.getItem('installedApps');
        if(savedSoft){
            return JSON.parse(savedSoft);
        }
        return [];
    });

    useEffect(()=>{
        localStorage.setItem('installedApps',JSON.stringify(soft));
    },[soft]);
    return (
        <div>
            <Header></Header>
            <Outlet context={{soft,setSoft}}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;