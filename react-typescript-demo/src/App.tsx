import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Raju" unreadMessages={10} />
    </div>
  );
}

export default App;
