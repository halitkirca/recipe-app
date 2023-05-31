import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Login from "./pages/login/Login.jsx";
import About from "./pages/about/About.jsx";
import Details from "./pages/details/Details.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/details" element={<Details/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
