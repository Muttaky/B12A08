import React, { useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import { toast } from 'react-toastify';
import {  BarChart,Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const AppsD = () => {
  let {soft,setSoft}=useOutletContext();
    let apps=useLoaderData();
    let [select,setSelect]=useState(() => soft.some(installedApp => installedApp.id === apps.id));
    return (
        <div className='m-10'>
<div className="card card-side bg-base-100 shadow-sm flex flex-col sm:flex-row">
  <figure>
    <img
      src={apps.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{apps.title}</h2>
    <p><small>Developed by</small> {apps.companyName}</p>
<div className="stats ">
  <div className="stat">
    <img src="/icon-downloads.png" alt="" />
    <div className="stat-title">Downloads</div>
    <div className="stat-value text-primary text-xl sm:text-3xl">{apps.downloads}</div>
  </div>

  <div className="stat">
    <img src="/icon-ratings.png" alt="" />
    <div className="stat-title">Avg Ratings</div>
    <div className="stat-value text-secondary text-xl sm:text-3xl">{apps.ratingAvg}</div>
  </div>

  <div className="stat">
       
         <img src="/icon-review.png" />
    <div className="stat-title">Reviews</div>    
    <div className="stat-value text-xl sm:text-3xl">{apps.reviews}</div>
  </div>
</div>
<button disabled={select} onClick={()=>{
  setSelect(true)
  toast.success('Installed')
  setSoft([...soft,apps])
}} className='btn btn-info w-50'>
  {select?'Installed':`Install Now (${apps.size} MB)`}</button>
  </div>
</div>
<div>
    <h3>Ratings</h3>
    <div style={{ width: '100%', height: 300 }}>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={apps.ratings} layout="vertical">
    <XAxis  type="number" />
    <YAxis  dataKey="name" type="category"/>
    <Tooltip />
    <CartesianGrid  />
    <Bar dataKey="count" fill="gold" barSize={30} />
  </BarChart>
</ResponsiveContainer>
</div>
</div>
<div>
    <h3>Description</h3>
    <small>{apps.description}This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
<br />
A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
<br />
For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</small>
</div>
        </div>
    );
};

export default AppsD;