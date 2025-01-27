import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { Interface } from "../components/Interface";

const Configure = () => {
  return (
    <div className="h-screen w-screen bg-[#d9afd9] bg-linear-to-r from-[#d9afd9] to-[#97d9e1]">
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <Interface />
    </div>
  );
};

export default Configure;
