import { Suspense } from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../share/routes";
import { useUsers } from "./useUsers";

export default function UserList() {
  const { users, message } = useUsers();

  if (message) return <p>{message}</p>;
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={ROUTES.USER(user.id)}>{user.email}</Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
