import "./App.css";
import Applayout from "./layouts/app-layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";
import JobListing from "./Pages/JobListing";
import JobPage from "./Pages/JobPage";
import MyJobs from "./Pages/MyJobs";
import PostJob from "./Pages/PostJob";
import SavedJobs from "./Pages/SavedJobs";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
