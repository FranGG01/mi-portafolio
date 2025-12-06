import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
