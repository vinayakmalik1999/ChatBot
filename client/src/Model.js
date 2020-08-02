import React, {Component} from 'react';
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";
import model from "models/hospital.glb"

export default function Model() {
  const { nodes } = useLoader(GLTFLoader,model );
  return (
    <group>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}
