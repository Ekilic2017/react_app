import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";

function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
