import { useState } from "react";

type greetProps = {
  name: string;
  msgs: number;
  isLogin: boolean;
};
export default function Greet(props: greetProps) {
    const [login, setLogin] = useState(props.isLogin);
  return (
    <>
      {login ? (
        <>
          <h3>Welcome, {props.name}</h3>
          <p>You have {props.msgs} unread messages.</p>
        </>
      ) : (
      <>
        <h3>Hello, Guest !</h3>
      </>
      )}
        <button onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>
    </>
  );
}
