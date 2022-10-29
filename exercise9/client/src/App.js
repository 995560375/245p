// import logo from './logo.svg';
import './App.css';

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
// import Main from './Main';

//Data
import LandingView from './LandingView';
import ExampleDataView from './SecondDataView';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<ExampleDataView />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
