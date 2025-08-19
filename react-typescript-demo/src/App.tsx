import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
    </div>
  );
}

export default App;
