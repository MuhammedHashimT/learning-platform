import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/Login.tsx";
import ErrorPage from "./components/Error.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import StudentDashboard from "./routes/StudentDashboard.tsx";
import QuizPage from "./routes/Quiz.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/dashboard",
    element: <StudentDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
