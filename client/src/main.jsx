import React from 'react'
import ReactDOM from 'react-dom/client'
// The main layout component
import App from './App.jsx'
// The CSS file
import './index.css'

// 1. Import the components from react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 2. Import our page components
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// 3. Define our routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component is the layout for all pages
    children: [
      {
        index: true, // The default child route for "/"
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
]);

// 4. Render the RouterProvider instead of the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)