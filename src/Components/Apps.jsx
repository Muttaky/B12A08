import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Apps = () => {
    let appsData=useLoaderData();
    return (
        <div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
    {
        appsData.map(app=>  <Link to={`/apps/${app.id}`}>
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
      <div className="badge badge-outline">{app.downloads}</div>
      <div className="badge badge-outline">{app.ratingAvg}</div>
    </div>
  </div>
</div> </Link>)
    }

</div>
        </div>
    );
};

export default Apps;