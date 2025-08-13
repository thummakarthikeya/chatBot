import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatBot from "./components/ChatBot.js";
import Practice from "./components/Practice.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
