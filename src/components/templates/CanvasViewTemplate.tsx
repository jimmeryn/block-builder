import React from 'react';
import { Canvas } from '@react-three/fiber';

export const CanvasViewTemplate: React.FC = ({ children }) => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    {children}
  </Canvas>
);
