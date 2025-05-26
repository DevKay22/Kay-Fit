import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Content from "./Components/Content";
// import Jobs from "./Components/Jobs";
// import Jobsview from "./Components/Jobsview";
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage/>} />
  </Route>
  )
);



const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
