import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Error from './Components/Error.jsx';

const Home = lazy(() => import('./Components/Home.jsx'));
const Apps = lazy(() => import('./Components/Apps.jsx'));
const Install = lazy(() => import('./Components/Install.jsx'));
const AppsD = lazy(() => import('./Components/AppsD.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
      {index:true,loader:()=>fetch('/homedata.json'),Component:Home},
      {path:"/apps",loader:()=>fetch('/appsdata.json'),Component:Apps},
      {path:"/apps/:appsId",loader: async({params})=>{
       let res=await fetch('/appsdata.json');
       let apps=await res.json();
       let appId=parseInt(params.appsId);
       let app=apps.find(a=>a.id===appId);

                 if (!app) {
            throw new Response(`App with ID ${params.appsId} not found.`, { status: 404 });
          }
          

       return app;
      }
      ,Component:AppsD},
      {path:"/install",Component:Install},
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>  <RouterProvider router={router} />
  </StrictMode>

)
