import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader.jsx";

import * as THREE from "three";
// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(10000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points
//         ref={ref}
//         positions={sphere.filter((item) => !Number.isNaN(item))}
//         stride={3}
//         frustumCulled
//         {...props}
//       >
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

const CustomGeometryParticles = (props) => {
  const { count, shape } = props;

  // This reference gives us direct access to our points
  const points = useRef();

  useFrame((state, delta) => {
    points.current.rotation.x += delta / 10;
    points.current.rotation.y += delta / 15;
  });

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      const distance = 1;

      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.003}
        color="#fff"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};
function StarsCanvas() {
  return (
    <div className="w-full h-auto inset-0 absolute z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          {/* <Stars /> */}
          <CustomGeometryParticles count={4000} shape={"box"} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
export default StarsCanvas;
