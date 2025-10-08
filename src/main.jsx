import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Apps from './Components/Apps.jsx';
import Install from './Components/Install.jsx';
import AppsD from './Components/AppsD.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,loader:()=>fetch('/homedata.json'),Component:Home},
      {path:"/apps",loader:()=>fetch('/appsdata.json'),Component:Apps},
      {path:"/apps/:appsId",loader: async({params})=>{
       let res=await fetch('/appsdata.json');
       let apps=await res.json();
       let appId=parseInt(params.appsId);
       let app=apps.find(a=>a.id===appId);
       return app;
      }
      ,Component:AppsD},
      {path:"/install",Component:Install},
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
