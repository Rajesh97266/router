import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
// import Contacts from "./pages/Contacts";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import ContactLayout from "./layout/ContactLayout";
import Info from "./components/Info";
import Form from "./components/Form";
import NotFound from "./pages/NotFound";
import UserLayout from "./layout/UserLayout";
import Users from "./pages/Users";
import User from "./components/user";
import { userLoader, userSingleLoader } from "./utils/UserLoader";
import ErrorPage from "./components/ErrorPage";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout />}>
        <Route index="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<ContactLayout />}>
          <Route path="info" element={<Info />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="users" element={<UserLayout />} errorElement={<ErrorPage/> }>
          <Route index="users" element={<Users />} loader={userLoader} />
          <Route path=":id" element={<User/>} loader={userSingleLoader} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
