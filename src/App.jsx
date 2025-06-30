import { useState } from "react";
import Auth from "./components/Auth";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="p-4">
      {user ? (
        <div>
          <h2 className="text-xl font-bold">Welcome, {user.email}</h2>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <Auth onLogin={setUser} />
      )}
    </div>
  );
}
