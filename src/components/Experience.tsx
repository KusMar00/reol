import { OrbitControls, Stage } from "@react-three/drei";
import { Table } from "./Table";

const Experience = () => {
  return (
    <>
      <Stage intensity={1.5} environment="city" adjustCamera={2}>
        <Table />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Experience;
