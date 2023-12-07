import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./components/home/Home";
import Documents from "./components/documents/Documents";
import News, { loader as NewsLoader } from "./components/news/News";
import Directory from "./components/directory/Directory";
import Community from "./components/community/Community";
import Resources from "./components/resources/Resources";
import Dashboard from "./components/dashboard/Dashboard";
import RegisterUser from "./components/auth/RegisterUser";
import RegisterLawyer from "./components/auth/RegisterLawyer";
import LawyerDashboard from "./components/lawyerDashboard/LawyerDashboard";
import LoginUser from "./components/auth/LoginUser";
import LoginLawyer from "./components/auth/LoginLawyer";
import UserDashboard from "./components/userDashboard/userDashboard";
import ErrorPage from "./pages/ErrorPage";
import NewAdmin from "./components/admin/NewAdmin";
import UpdateContent from "./components/admin/UpdateContent";
import PendingRequests from "./components/admin/PendingRequests";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
        loader: NewsLoader,
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
        path: "registerUser",
        element: <RegisterUser />,
      },
      {
        path: "registerLawyer",
        element: <RegisterLawyer />,
      },
      {
        path: "lawyerDashboard",
        element: <LawyerDashboard />,
      },
      {
        path: "loginUser",
        element: <LoginUser />,
      },
      {
        path: "loginLawyer",
        element: <LoginLawyer />,
      },
      {
        path: "userDashboard",
        element: <UserDashboard />,
      },
      {
        path: "newAdmin",
        element: <NewAdmin />,
      },
      {
        path: "updateContent",
        element: <UpdateContent />,
      },
      {
        path: "pendingRequests",
        element: <PendingRequests />,
      },
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
