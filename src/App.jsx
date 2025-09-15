import { BrowserRouter  as Router,Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PetDetail from "./pages/PetDetail";
import Footer from "./components/Footer";
import About from "./pages/About";
import Pets from "./pages/Pets";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/:id" element={<PetDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

