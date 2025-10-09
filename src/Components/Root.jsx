import React, { Suspense, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation, } from 'react-router';
  import { ToastContainer,} from 'react-toastify';


  const LoadingFallback = (
    <div className="flex justify-center items-center h-[50vh]">
        <span className="loading loading-ring loading-xl text-primary"></span>
    </div>
);
const Root = () => {
    const navigation = useNavigation();


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
                     {navigation.state === "loading"||navigation.state === "submitting" ? (
                // Show the DaisyUI loader during data fetching
                LoadingFallback
            ) : (
            <Suspense fallback={LoadingFallback}>
                <Outlet context={{ soft, setSoft }}></Outlet>
            </Suspense>
        )}
            <Footer></Footer>

              <ToastContainer />
        </div>
    );
};

export default Root;