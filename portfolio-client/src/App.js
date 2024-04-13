import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import DescriptionPage from './Pages/DescriptionPage';

function App(props) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, 
          element: <HomePage/>
        },
        {
          path: "/about",
          element: <AboutPage/>
        },
        {
          path: "/projects",
          element: <ProjectsPage/>
        },  
        {
          path: "/contact",
          element: <ContactPage/>
        },  
        {
          path: "/project-description",
          element: <DescriptionPage/>
        }      
      ]


    }
  ])
  return (
    <div id='app-page-div' className=''>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
