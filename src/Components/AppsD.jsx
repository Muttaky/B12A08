import React from 'react';
import { useLoaderData } from 'react-router';

const AppsD = () => {
    let apps=useLoaderData();
    return (
        <div>
<div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={apps.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{apps.title}</h2>
    <p><small>Developed by</small> {apps.companyName}</p>
<div className="stats">
  <div className="stat">
    <img src="/icon-downloads.png" alt="" />
    <div className="stat-title">Downloads</div>
    <div className="stat-value text-primary">{apps.downloads}</div>
  </div>

  <div className="stat">
    <img src="/icon-ratings.png" alt="" />
    <div className="stat-title">Average Ratings</div>
    <div className="stat-value text-secondary">{apps.ratingAvg}</div>
  </div>

  <div className="stat">
       
         <img src="/icon-review.png" />
    <div className="stat-title">Total Reviews</div>    
    <div className="stat-value">{apps.reviews}</div>
  </div>
</div>
<button className='btn'>Install Now ({apps.size} MB)</button>
  </div>
</div>
<div>
    <h3>Description</h3>
    <small>{apps.description}</small>
</div>
        </div>
    );
};

export default AppsD;