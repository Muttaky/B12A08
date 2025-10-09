import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const Home = () => {
    let appsData=useLoaderData();
    return (
        <div className='m-10'>
            <div className="bg-base-200 text-center">
  <div>
    <div className='m-10'>
      <h1 className="text-5xl font-bold">We Build <br /> <span className='text-blue-400'>Productive</span>  Apps</h1>
      <p>
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <a href="https://play.google.com/" target='_blank'><button className="btn btn-info">Play Store</button></a>
      <a href="https://www.apple.com/app-store/" target='_blank'><button className="btn btn-info m-2">App Store</button></a>
      
    </div>
     <img className='mx-auto w-[50%]'
      src="/hero.png"/> 
  </div>
</div>


<div className="text-center bg-blue-400 text-neutral-50 p-10">
  <h2 className='text-4xl m-5'>Trusted by Millions, Built for You</h2>
              <div className="text-center flex justify-around bg-blue-400 text-neutral-50">
  <div className="">
    <div className="">Total Downloads</div>
    <div className="stat-value">29.6M</div>
    <div className="">21% more than last month</div>
  </div>

  <div className="">
    <div className="">Total Reviews</div>
    <div className="stat-value">906K</div>
    <div className="">46% more than last month</div>
  </div>

  <div className="">
    <div className="">Active Apps</div>
    <div className="stat-value">132+</div>
    <div className="">31 more will Launch</div>
  </div>
</div>
</div>


                    <div className="text-center py-10 border-blue-200">
                <h1 className="text-4xl font-bold text-gray-800">Trending Apps</h1>
                <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
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
      <div className="badge badge-outline">⬇️{apps.downloads}</div>
      <div className="badge badge-outline">⭐️{apps.ratingAvg}</div>
    </div>
  </div>
</div></Link>)
    }

</div>
<div className='flex justify-center'>    
    <Link to="/apps"><button className="btn btn-info">Show All</button></Link>  </div>

        </div>
    );
};

export default Home;