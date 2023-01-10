import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <button>Add Player</button>
    </div>
  );
}

export default App;
