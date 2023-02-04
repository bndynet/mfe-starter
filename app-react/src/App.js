import './App.css';
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import basePath from './base-path';

const About = lazy(() => import('./pages/About'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: '',
      element: <Home />
    }, {
      path: "about",
      element: <About />,
    }]
  }, {
  }
], {
  basename: basePath,
});

function Loading() {
  return (<div>Loading...</div>);
}

function App() {
  return (
    <>
      <div id="nav">
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
