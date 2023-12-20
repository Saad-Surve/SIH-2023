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
import { loader as LawyerDashboardLoader } from "./components/dashboard/Posts";
import RegisterUser from "./components/auth/RegisterUser";
import RegisterLawyer from "./components/auth/RegisterLawyer";
import LoginUser from "./components/auth/LoginUser";
import LoginLawyer from "./components/auth/LoginLawyer";
import LoginAdmin from "./components/auth/LoginAdmin";
import UserDashboard from "./components/userDashboard/userDashboard";
import ErrorPage from "./pages/ErrorPage";
import NewAdmin from "./components/admin/NewAdmin";
import UpdateContent from "./components/admin/UpdateContent";
import PendingRequests, {
  loader as PendingRequestsLoader,
} from "./components/admin/PendingRequests";
import Statistics from "./components/statistics/Statistics";
import SpeechToText from "./components/UI/SpeechToText";
import GoogleSpeechToText from "./components/UI/GoogleSpeechToText";
import AudioRecorder from "./components/UI/AudioRecorder";
import AudioRecorder2 from "./components/UI/AudioRecorder";

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
        path: "registerUser",
        element: <RegisterUser />,
      },
      {
        path: "registerLawyer",
        element: <RegisterLawyer />,
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
        path: "loginAdmin",
        element: <LoginAdmin />,
      },
      {
        path: "lawyerDashboard",
        element: <Dashboard />,
        loader: LawyerDashboardLoader,
      },
      {
        path: "userDashboard",
        element: <UserDashboard />,
      },
      {
        path: "adminDashboard",
        element: <NewAdmin />,
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
        loader: PendingRequestsLoader,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "speech",
        element: <SpeechToText />,
      },
      {
        path: "googleSpeech",
        element: <AudioRecorder />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-background-gray">
      <RouterProvider router={router} />
      <SpeechToText />
    </div>
  );
}

export default App;
