import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./components/home/Home";
import Documents from "./components/documents/Documents";
import News from "./components/news/News";
import Directory from "./components/directory/Directory";
import Community from "./components/community/Community";
import Resources from "./components/resources/Resources";
import Dashboard from "./components/dashboard/Dashboard";
import RegisterUser from "./components/auth/RegisterUser";
import RegisterLawyer from "./components/auth/RegisterLawyer";
import LawyerDashboard from "./components/lawyerDashboard/LawyerDashboard";
import LoginUser from "./components/auth/LoginUser";
import LoginLawyer from "./components/auth/LoginLawyer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "directory",
        element: <Directory />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path:"registerUser",
        element:<RegisterUser />
      },
      {
        path:"registerLawyer",
        element:<RegisterLawyer />
      },
      {
        path:"lawyerDashboard",
        element:<LawyerDashboard />
      },
      {
        path:"loginUser",
        element:<LoginUser />
      },
      {
        path:"loginLawyer",
        element:<LoginLawyer />
      }
    ],
  },
]);

function App() {
  return (
    <div className="bg-background-gray">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
