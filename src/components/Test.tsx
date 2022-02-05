import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { map } from 'ramda';

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'lightgreen' : 'lightblue'} />
    </mesh>
  );
};

const createBox = (position: [number, number, number] = [0, 0, 0]) => (
  <Box position={position} />
);

export const Test = () => {
  const c = 1.2;

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {map(createBox)([
        [-c, 0, 0],
        [0, 0, 0],
        [c, 0, 0],
        [-c, c, 0],
        [0, c, 0],
        [c, c, 0],
        [-c, -c, 0],
        [0, -c, 0],
        [c, -c, 0],
      ])}
    </Canvas>
  );
};
