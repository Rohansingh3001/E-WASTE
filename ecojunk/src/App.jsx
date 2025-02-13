import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import AddEwaste from "./AddEwaste"; // Import AddEwaste Component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-ewaste" element={<AddEwaste />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
