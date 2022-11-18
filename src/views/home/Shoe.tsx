import {
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useEffect, useRef, useState, useTransition } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "white" }}>
      <span>{progress.toFixed(0)}%</span>
    </Html>
  );
};

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/static/shoe.gltf`
  );
  const myMesh = useRef<Mesh>(null);
  /*
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (myMesh.current) {
      myMesh.current.rotation.y = -a;
    }
  });*/
  useEffect(() => {
    if (myMesh.current) {
      myMesh.current.rotation.z = -20;
      myMesh.current.rotation.y = -20;
    }
  }, []);
  return (
    <mesh ref={myMesh}>
      <primitive object={gltf.scene} scale={12} />
    </mesh>
  );
};

const Shoe = () => {
  return (
    <div className="absolute left-0 top-0 bottom-0 right-0">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls />
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
            blur={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Shoe;
