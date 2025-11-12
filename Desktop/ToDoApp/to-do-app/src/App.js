// components
import Header from "./components/Header"; //
import Sidebar from "./components/Sidebar";
import "./App.css";
import "./components.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="side-content">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
