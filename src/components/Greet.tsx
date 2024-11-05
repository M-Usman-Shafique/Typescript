import { useState } from "react";
import Profile from "./Profile";
import { bioProps, greetProps } from "../types/types";

export default function Greet({ name, msgs = 0, isLogin }: greetProps) {
  const [login, setLogin] = useState(isLogin);

  const profileBio: bioProps = {
    age: 30,
    gender: "Male",
    job: "Web Developer",
  };

  return (
    <>
      {login ? (
        <>
          <h3>Welcome, {name} !!</h3>
          <h5>You have {msgs} unread messages</h5>
          <Profile {...profileBio} />
        </>
      ) : (
        <>
          <h3>Hello, Guest !!</h3>
        </>
      )}
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </>
  );
}
