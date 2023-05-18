import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Project from "../../Pages/Home/Project/Project";
import ProjectDetails from "../../Pages/Home/Project/ProjectDetails";
import Projects from "../../Pages/Home/Projects/Projects";
import Skills from "../../Pages/Home/Skills/Skills";





 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/project',
            element: <Projects></Projects>
        },
        {
            path: '/skill',
            element: <Skills></Skills>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        // {
        //     path: '/projectDetails',
        //     element: <ProjectDetails></ProjectDetails>
        // },
        
        {
            path:'/checkout/:_id',
            element: <ProjectDetails></ProjectDetails>,
            loader: ({params})=> fetch(`https://portfolio-server-side-ten.vercel.app/project/${params._id}`)
            
        },
        
       
      ]
    },
   
   
  ]);

  


 