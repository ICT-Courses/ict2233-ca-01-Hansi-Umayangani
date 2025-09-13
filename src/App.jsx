import { BrowserRouter  as Router,Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PetDetail from "./pages/PetDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/:id" element={<PetDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

