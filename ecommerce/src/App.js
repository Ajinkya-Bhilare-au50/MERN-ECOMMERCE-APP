import Header from "./components/Header";
import Footer from "./components/Footer";
// import{BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
