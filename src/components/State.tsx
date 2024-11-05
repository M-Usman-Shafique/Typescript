import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function State() {
  const [user, setUser] = useState<User>({} as User); // when we are sure that user will never be null

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
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
    </>
  );
}
