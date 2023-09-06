import "./App.css";
import User from "./components/User";
import Home from "./containers/Home";

import Register from "./containers/Register";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="dashboard" element={<Home />}></Route>
      <Route path="/dashboard/:userId" element={<User />} />
      <Route path="register" element={<Register />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
