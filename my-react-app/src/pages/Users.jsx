import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
  const users = useLoaderData();
  return (
    <div className="container">
      <div className="users">
        {users.map((user) => {
          return (
            <Link key={user.id} to={user.id.toString()}>
              <div className="user">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
