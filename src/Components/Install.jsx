import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import { toast } from 'react-toastify';

const Install = () => {
    let {soft,setSoft}=useOutletContext();

    let [sort,setSort]=useState('none');
    const getSortedApps = () => {
        const appsToSort = [...soft];
        if (sort === 'high-low') {
            return appsToSort.sort((a, b) => b.downloads - a.downloads);
        } else if (sort === 'low-high') {
            return appsToSort.sort((a, b) => a.downloads - b.downloads);
        }
        return soft;
    };
    const sortedApps = getSortedApps();

    return (
        <div className='m-10'>
            <h2 className='text-4xl text-center font-bold text-gray-800'>Your Installed Apps</h2>
            <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

            <div className='mt-8 flex justify-between items-center'>
                <h3 className='text-lg font-semibold text-gray-700'>{soft.length} Apps Found</h3>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1 border bg-gray-50 text-gray-700">


                        {sort === 'high-low' ? 'Downloads: High-Low' : 
                         sort === 'low-high' ? 'Downloads: Low-High' : 
                         'Sort By Downloads'}  
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => setSort('high-low')}>Downloads: High to Low</a></li>
                        <li><a onClick={() => setSort('low-high')}>Downloads: Low to High</a></li>
                    </ul>
                </div>
            </div>

            <div className='mt-4 space-y-3'>
                {soft.length === 0 ? (
                    <div className='text-center py-10 bg-white shadow-sm rounded-lg'>
                        <p className='text-gray-500'>You haven't installed any apps yet. Go install one!</p>
                    </div>
                ) : (
                    sortedApps.map(app => (
                        <div key={app.id} className="flex items-center bg-white shadow-sm p-4 rounded-lg border border-gray-100">
                            
                            <figure className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
                                {app.image && (
                                    <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-lg" />
                                )}
                            </figure>
                            <div className="flex-grow">
                                <h3 className="text-md font-semibold text-gray-800">{app.title}</h3>
                                <div className="text-sm text-gray-500 flex items-center space-x-3 mt-1">
                                    <span className="flex items-center">
                                        ⬇️ <span className="ml-1">{Math.round(app.downloads / 100000) / 10}M</span>
                                    </span>
                                    <span className="flex items-center">
                                        ⭐️ <span className="ml-1">{app.ratingAvg}</span>
                                    </span>
                                    <span className="ml-1 text-gray-400">{app.size} MB</span>
                                </div>
                            </div>
                            <div className="ml-auto flex-shrink-0">
                                <button 
                                    onClick={() =>{           
                                      let updatedSoft = soft.filter(ap => ap.id !== app.id);
                                      setSoft(updatedSoft);
                                      toast.success(`${app.title} has been uninstalled.`);      
                                    } } 
                                    className='btn btn-sm btn-success bg-green-500 hover:bg-green-600 text-white border-none'
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Install;