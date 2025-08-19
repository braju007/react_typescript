import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
    </div>
  );
}

export default App;
