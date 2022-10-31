// import logo from './logo.svg';
import './App.css';
import "./Header.css";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Main from './Main';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
