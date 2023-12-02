import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./components/home/Home";
import Documents from "./components/documents/Documents";
import News from "./components/news/News";
import Directory from "./components/directory/Directory";
import Community from "./components/community/Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
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
