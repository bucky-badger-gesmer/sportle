import "./App.css";
import { Content, Footer, Header } from "antd/es/layout/layout";
import NbaPlayers from "./components/NbaPlayers";

function App() {
  return (
    <div className="App">
      <Header style={{ color: 'white' }}>SportQL Client</Header>
      <Content>
        <NbaPlayers />
      </Content>
    </div>
  );
}

export default App;
