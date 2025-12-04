import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ScrollToTop />
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
