import logo from './logo.svg';
import './App.css';
import "./Header.css";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
