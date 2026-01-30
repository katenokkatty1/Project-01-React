import { Link, useParams } from "react-router-dom";
import s from "./UserPage.module.css";
import { useUserById } from "./useUserById";
import { ROUTES } from "../../share/routes";

export default function UserPage() {
  const { id } = useParams();
  const { user, message } = useUserById(id);

  if (message) return <p>{message}</p>;

  return (
    <section className={s.section}>
      <div className={s.userCard}>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <img src={user?.avatar} alt={user?.name} />
        <Link to={ROUTES.USERS}>Back to Users</Link>
      </div>
    </section>
  );
}