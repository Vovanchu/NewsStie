import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import TopArrow from "./assets/TopArrow.svg";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <a href="#" className="top_button">
          <img src={TopArrow} alt=" Top Arrow" className="top_arrow" />
        </a>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
