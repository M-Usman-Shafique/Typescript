import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Status from "./components/Status";
import Users from "./components/Users";

export default function App() {
  const usersList = [
    {
      first: "Noman",
      last: "Shafiq",
    },
    {
      first: "Salman",
      last: "Shafiq",
    },
    {
      first: "Waseem",
      last: "Shah",
    },
  ];
  return (
    <>
    <Heading>Homepage</Heading>
      <Greet name="Usman" msgs={12} isLogin={false} />
      <Users users={usersList} />
      <Status status="success" />
    </>
  );
}
