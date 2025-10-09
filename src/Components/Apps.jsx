import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const Apps = () => {
    let appsData=useLoaderData();

    let [term,setTerm]=useState('');
    let filApps=appsData.filter(app=>app.title.toLowerCase().includes(term.toLocaleLowerCase()));

    return (
        <div className='p-5'>

                    <div className="text-center py-10  border-blue-200">
                <h1 className="text-4xl font-bold text-gray-800">Our All Applications</h1>
                <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>



                       <div className='mt-8 flex justify-between items-center px-4'>
                <h3 className='text-lg font-semibold text-gray-700'>({filApps.length}) Apps Found</h3>
                <div className='flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search Apps"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className='ml-2 focus:outline-none w-48'
                    />
                </div>
            </div>









            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
    {
        filApps.map(app=>  <Link key={app.id} to={`/apps/${app.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
  <figure>
    <img
      src={app.image}
      alt="Apps" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {app.title}
    </h2>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">⬇️{app.downloads}</div>
      <div className="badge badge-outline">⭐️{app.ratingAvg}</div>
    </div>
  </div>
</div> </Link>)
    }

</div>
        </div>
    );
};

export default Apps;