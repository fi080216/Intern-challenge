import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

//import react router dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//create router

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/Dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  }
])


function App() {
  return (
    <div>
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
