"use client";

import { Canvas } from "@react-three/fiber";
import { Bounds, Center, Environment, Html, useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
// cleaned unused types/imports
import { Suspense } from "react";

function TabletModel({ path, fallbackRotation = 0, desiredMax = 2, scaleMultiplier = 1.0 }: { path: string; fallbackRotation?: number; desiredMax?: number; scaleMultiplier?: number }) {
    // Try load GLB; if missing, render a simple rounded rectangle as placeholder
    try {
        const gltf = useGLTF(path);
        // Normalize model so its largest dimension ~= desiredMax, then multiply
        const bbox = new Box3().setFromObject(gltf.scene);
        const size = bbox.getSize(new Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const normalized = (desiredMax / maxDim) * scaleMultiplier;
        return (
            <group rotation={[0, fallbackRotation, 0]}>
                <Center>
                    <primitive object={gltf.scene} scale={normalized} />
                </Center>
            </group>
        );
    } catch {
        return (
            <mesh rotation={[0, fallbackRotation, 0]}>
                <boxGeometry args={[2, 1.35, 0.06]} />
                <meshStandardMaterial color="#222" />
            </mesh>
        );
    }
}

// Removed unused AnimatedTablet component

export default function TabletsCanvas() {
    return (
        <div className="mx-auto mt-10 w-full max-w-6xl">
            <Canvas camera={{ position: [0, 0.5, 8], fov: 45, near: 0.1, far: 100 }} className="h-[900px] w-full">
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={0.7} />
                <Suspense fallback={<Html center>Loading 3D…</Html>}>
                    {/* Single tablet for baseline validation with auto-fit bounds (no clipping) */}
                    <Bounds fit clip observe margin={1.15}>
                        <group position={[0, -0.1, 0]} rotation={[0, -0.18, 0]}>
                            <TabletModel path="/models/tab1.glb" desiredMax={3} scaleMultiplier={1.0} />
                        </group>
                    </Bounds>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload hooks
useGLTF.preload?.("/models/tab1.glb");
useGLTF.preload?.("/models/tab2.glb");


