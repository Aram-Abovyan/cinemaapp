import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Root } from './routes/root'
import { Room } from './routes/room'
import { Seats } from './components/Seats'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: '/rooms/:roomId',
    element: <Room />,
    children: [
      {
        path: "schedules/:scheduleId",
        element: <Seats />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
