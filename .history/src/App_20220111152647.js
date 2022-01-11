import "./App.css";
import { Header } from "./components/header/Header";
import Card from "./pages/card/Card";
import Statistical from "./pages/statistical/Statistical";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <Statistical />
      <Card />
    </div>
  );
}

export default App;
