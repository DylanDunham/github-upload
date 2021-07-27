import React, { Suspense } from 'react';
import { useGLTF, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const App = () => {
  const cow = useGLTF('./Cow.glb');
  return (
    <Suspense fallback={'Loading'}>
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <Stage>
          <primitive object={cow.scene} />
        </Stage>
      </Canvas>
    </Suspense>
  );
};

export default App;


