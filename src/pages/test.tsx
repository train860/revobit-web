import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useState, useTransition } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/static/shoe.gltf`
  );
  return (
    <>
      <primitive object={gltf.scene} scale={8} />
    </>
  );
};
const Env = () => {
  const [preset, setPreset] = useState<string>("sunset");
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition();
  const { blur } = useControls({
    blur: { value: 0.65, min: 0, max: 1 },
    preset: {
      value: preset,
      //options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
      // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
      // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
      // That way we can hang onto the current environment until the new one has finished loading ...
      onChange: (value) => startTransition(() => setPreset(value)),
    },
  });
  return <Environment preset={preset} background blur={blur} />;
};
const Test = () => {
  return (
    <div className="absolute left-0 top-0 bottom-0 right-0">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" background blur={0.8} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Test;
