import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./testing.css";
import "./index.scss";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Tutorial from "./routes/Tutorial";
import ErrorPage from "./routes/ErrorPage";
import Create from "./routes/Create";
import Join from "./routes/Join";
import Profile from "./routes/Profile";
import Lobby from "./routes/Lobby";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="home/">
        <Route index element={<Home />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="create/">
          <Route index element={<Create />} />
          <Route path="lobby/" element={<Lobby />} />
        </Route>
        <Route path="join/">
          <Route index element={<Join />} />
          <Route path="lobby/" element={<Lobby />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// {
//   path: "/",
//   element: <Layout />,
//   errorElement: <ErrorPage />,

//   children: [
//     {
//       index: true,
//       element: <Login />,
//     },
//     {
//       path: "/tutorial", // contacts/:contactId
//       element: <Tutorial />,
//     },
//     // {
//     //   path: "/home/tutorial", // contacts/:contactId
//     //   element: <Tutorial />,
//     // },
//     {
//       path: "/home",
//       element: <Home />,
//     },
//     {
//       path: "/home/create",
//       element: <Create />,
//     },
//     {
//       path: "/home/join",
//       element: <Join />,
//     },
//     {
//       path: "/profile",
//       element: <Profile />,
//     },
//     {
//       path: "/home/create/lobby",
//       element: <Lobby />,
//     },
//     {
//       path: "/home/join/lobby",
//       element: <Lobby />,
//     },
//   ],
// },

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,

//     children: [
//       {
//         index: true,
//         element: <Login />,
//       },
//       {
//         path: "/tutorial", // contacts/:contactId
//         element: <Tutorial />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//         children: [
//           {
//             path: "/profile",
//             element: <Profile />,
//           },
//           {
//             path: "/create",
//             element: <Create />,
//             children: [
//               {
//                 path: "/home/create/lobby",
//                 element: <Lobby />,
//               },
//             ],
//           },
//           {
//             path: "/join",
//             element: <Join />,
//             children: [
//               {
//                 path: "/home/join/lobby",
//                 element: <Lobby />,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);
