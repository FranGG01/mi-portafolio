import Navbar from "./components/Navbar";
function App() {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">¡Hola, soy Francisco! 🚀</h1>
      <p className="text-lg text-gray-300">
        Tailwind está funcionando en mi portafolio 😎
      </p>
      <button className="mt-6 px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
        Ver mis proyectos
      </button>
    </div>
  );
}

export default App;
