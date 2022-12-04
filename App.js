
// import './App.css';
// import  '../node_modules/bootstrap/dist/css//bootstrap.css';
// import Home from './component/Home';

// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Pages/Login";
import Login2 from "./component/Pages/Login2";
import Home from "./component/Home";
import Freetrial from "./component/Pages/Freetrial";
import Navbar from "./component/Layout/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />

          <Route path="/freetrial" element={<Freetrial />} />
        </Routes>
        <Home/>
      </div>
    </Router>
  );
}

export default App;