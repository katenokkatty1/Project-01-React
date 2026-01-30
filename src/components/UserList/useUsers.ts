import { useEffect, useState } from "react";
import type { User } from "../../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");
  async function fetchUsers() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      if (!res.ok) {
        throw new Error(`Failed to fetch with status ${res.status}`);
      }
      const arr = await res.json();
      setUsers(arr);
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, message };
}