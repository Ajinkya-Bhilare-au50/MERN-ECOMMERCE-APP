import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homescreen";
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
