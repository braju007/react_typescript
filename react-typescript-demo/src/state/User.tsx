import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // If you use {} as AuthUser then "?" is not required in JSX {user.name}
  //   const [user, setUser] = useState({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Basavaraj",
      email: "basavaraj@demo.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      {/* <div>User name is {user.name}</div> */}
      <div>User name is {user?.email}</div>
    </div>
  );
};
