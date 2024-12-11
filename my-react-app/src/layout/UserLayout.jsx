import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="container">
      <h1>List of users </h1>
      <p>Lorem ipsum dolor sit amet, consectetur </p>
      <Outlet />
    </div>
  );
};

export default UserLayout;