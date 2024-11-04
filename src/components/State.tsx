import { useState } from "react";

type User = {
  name: string;
  email: string;
};
export default function State() {
  const [user, setUser] = useState<User | null>(null);

  const handleShow = () => {
    setUser({
      name: "John Doe",
      email: "John@example.com",
    });
  };

  return (
    <>
      <button onClick={handleShow} style={{ marginRight: 8 }}>
        Show User Details
      </button>
      <button onClick={() => setUser(null)}>Hide User Details</button>
          <p>Username: {user?.name}</p> {/* Typescript automatically added optional chaining as user value can be null*/}
          <p>Email: {user?.email}</p>
    </>
  );
}
