import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const Home = () => {
    let appsData=useLoaderData();
    return (
        <div>
            <div className="bg-base-200 text-center">
  <div>
    <div>
      <h1 className="text-5xl font-bold">We Build
Productive Apps</h1>
      <p>
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
     <img className='mx-auto'
      src="/hero.png"/> 
  </div>
</div>
            <div className="text-center flex justify-around">
  <div className="">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>

  <div className="">
    <div className="">Users</div>
    <div className="">4,200</div>
    <div className="">↗︎ 40 (2%)</div>
  </div>

  <div className="">
    <div className="">New Registers</div>
    <div className="">1,200</div>
    <div className="">↘︎ 90 (14%)</div>
  </div>
</div>
<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
    {
        appsData.map(apps=>  <Link to={`/apps/${apps.id}`}>  <div className="card bg-base-100 w-96 shadow-sm mx-auto">
  <figure>
    <img
      src={apps.image}
      alt="Apps" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {apps.title}
    </h2>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{apps.downloads}</div>
      <div className="badge badge-outline">{apps.ratingAvg}</div>
    </div>
  </div>
</div></Link>)
    }

</div>
<div className='flex justify-center'>    
    <Link to="/apps"><button className="btn btn-primary">Show All</button></Link>  </div>

        </div>
    );
};

export default Home;