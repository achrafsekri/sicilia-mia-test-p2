import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Searchcontext } from "./components/searchcontext";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Apis from "./pages/Apis";
import Test from "./pages/Test";
import { useState } from "react";
import Singleapipage from "./pages/Singleapipage";

function App() {
  const [search, setsearch] = useState("");
  return (
    <Router>
      <Searchcontext.Provider value={{ search, setsearch }}>
        <div className="container">
          <div className="left">
            <Sidebar />
          </div>

          <div className="right">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apis" element={<Apis />} />
              <Route path="/apis/:name" element={<Singleapipage />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </div>
      </Searchcontext.Provider>
    </Router>
  );
}

export default App;
