import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './components/pages/dashboard.jsx';
import CreateStudent from './components/pages/CreateStudent.jsx';
import StudentTable from './components/pages/StudentTable.jsx';
import TeacherTable from './components/pages/TeacherTable.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateTeacher from './components/pages/CreateTeacher.jsx';


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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
