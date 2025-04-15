import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import Database from "@/pages/Database";
import Home from "@/pages/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/database" element={<Database />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
