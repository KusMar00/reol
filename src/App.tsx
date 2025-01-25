import NavBar from "./components/NavBar";
import Scene from "./components/Scene";

function App() {
  return (
    <main className="flex flex-col h-screen bg-black">
      <Scene />
      <NavBar />
    </main>
  );
}

export default App;
