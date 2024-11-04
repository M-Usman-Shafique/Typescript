import "./App.css";
import Event from "./components/Event";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import State from "./components/State";
import Status from "./components/Status";
import Style from "./components/Style";
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
      <Greet name="Usman" isLogin={false} />
      <Users users={usersList} />
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Decaprio!</Heading>
      </Oscar>
      <Event />
      <Style styles={{ backgroundColor: "green", padding: 4 }} />
      <State />
    </>
  );
}
