import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
    <div className="app">
      <Header />
    </div>
    <div className="content">
      <Home />
      <div className="section-divider" />
      <About />
    </div>
    
    </>
  );
}

export default App;