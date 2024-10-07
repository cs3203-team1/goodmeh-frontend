import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";

const HomePage = () => import("./pages/Home.page");
const DiscoverPage = () => import("./pages/Discover.page");
const ComparePage = () => import("./pages/Compare.page");
const DashboardPage = () => import("./pages/Dashboard.page");

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", lazy: HomePage },
      { path: "/discover", lazy: DiscoverPage },
      { path: "/compare", lazy: ComparePage },
      { path: "/dashboard", lazy: DashboardPage },
    ],
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
