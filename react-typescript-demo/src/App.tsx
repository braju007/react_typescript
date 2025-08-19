import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

function App() {
  const personName = {
    first: "Basavaraj",
    last: "Juganavar",
  };

  const nameList = [
    {
      first: "Raju",
      last: "Juganavar",
    },
    {
      first: "Sonu",
      last: "Raj",
    },
    {
      first: "Rishu",
      last: "Raj",
    },
  ];
  return (
    <div className="App">
      <Greet name="Raju" unreadMessages={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Hello! Raju Juganavar</Heading>
      <Oscar>
        <Heading>Oscar goes to Raju Juganavar!</Heading>
      </Oscar>
      <Greet name="Raju" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          backgroundColor: "skyblue",
        }}
      />
    </div>
  );
}

export default App;
