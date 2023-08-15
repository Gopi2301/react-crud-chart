import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreateStudent from './pages/CreateStudent.jsx';
import StudentTable from './pages/StudentTable.jsx';
import TeacherTable from './pages/TeacherTable.jsx';
import EditPage from './pages/EditPage.jsx';
import CreateTeacher from './pages/CreateTeacher.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chart from './components/chart/Chart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: '/createstudent',
    element: <CreateStudent />
  },
  {
    path: '/createteacher',
    element: <CreateTeacher />
  },
  {
    path: '/studenttable',
    element: <StudentTable />
  },
  {
    path: '/teacherTable',
    element: <TeacherTable />
  },
  {
    path: '/editpage',
    element: <EditPage />
  },
  {
    path: '/chart',
    element: <Chart />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
