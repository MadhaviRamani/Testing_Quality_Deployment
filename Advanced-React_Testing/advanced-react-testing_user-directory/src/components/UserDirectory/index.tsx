import { useEffect, useState } from "react";
import type { User } from "../../types";

export default function UserDirectory() {
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function loadUsers() {
      try {
        const response = await fetch("/users.json");
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data: User[] = await response.json();
        if (!ignore) {
          setUsers(data);
          setStatus("success");
        }
      } catch {
        if (!ignore) {
          setStatus("error");
        }
      }
    }

    loadUsers();

    return () => {
      ignore = true;
    };
  }, [attempt]);

  function handleRetry() {
    setAttempt(attempt + 1);
  }

  if (status === "loading") {
    return <p>Loading users …</p>;
  }

  if (status === "error") {
    return (
      <div role="alert">
        <p>Could not load the users.</p>
        <button type="button" onClick={handleRetry}>
          Retry
        </button>
      </div>
    );
  }

  const visibleUsers = users.filter((user) => user.name.includes(query));

  return (
    <>
      <h1>Users</h1>
      <label>
        Search
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      {users.length === 0 && <p>There are no users yet.</p>}
      {users.length > 0 && visibleUsers.length === 0 && (
        <p>No users match "{query}".</p>
      )}
      <ul>
        {visibleUsers.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
}
