import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
