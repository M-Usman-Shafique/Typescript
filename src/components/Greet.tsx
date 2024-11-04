import { useState } from "react";
import Profile from "./Profile";

type greetProps = {
  name: string;
  msgs?: number;
  isLogin: boolean;
};
export default function Greet(props: greetProps) {
  const [login, setLogin] = useState(props.isLogin);
  const {msgs = 0} = props;

  const profileInfo = {
    age: 30,
    gender: "Male",
    job: "Web Developer",
  };

  return (
    <>
      {login ? (
        <>
          <h3>Welcome, {props.name}</h3>
          <h5>You have {msgs} unread messages</h5>
          <Profile info={profileInfo} />
        </>
      ) : (
        <>
          <h3>Hello, Guest !</h3>
        </>
      )}
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </>
  );
}
