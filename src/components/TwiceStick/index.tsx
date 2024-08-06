// src/ThreeScene.js
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'

const JumpingModel = (props: {
  handleClick: React.MutableRefObject<() => void>
}) => {
  const { scene } = useGLTF('/twice-light_stick-small.glb') // https://sketchfab.com/3d-models/twice-light-stick-feded42538654a8b9bfa2a5db79fd974
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
    // restitution: 20, // Bounciness
    // friction: 0,
    // linearDamping: 0.1,
    // angularDamping: 0.1,
  }))
  const velocity = useRef([0, 0, 0])
  const rotation = useRef(0)
  const lightRef = useRef()

  const handleClick = () => {
    api.velocity.set(0, 5, 0)
  }

  useEffect(() => {
    props.handleClick.current = handleClick
    api.velocity.subscribe((v) => (velocity.current = v))
  }, [])

  useFrame(() => {
    const newRotation = rotation.current + 0.005
    api.rotation.set(0, newRotation, 0)
    rotation.current = newRotation
  })

  return (
    <>
      <mesh
        // @ts-ignore
        ref={ref}
        scale={[90, 90, 90]}
      >
        <primitive object={scene} />
        <meshStandardMaterial
          color="orange"
          emissive="yellow"
          emissiveIntensity={5}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <pointLight
        // @ts-ignore
        ref={lightRef}
        intensity={100} // Light intensity
        distance={100}
        decay={1}
        color="red"
        position={[0, 3, 3]}
      />
    </>
  )
}

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -7, 0],
  }))
  return (
    <mesh
      // @ts-ignore
      ref={ref}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial opacity={0} transparent={true} />
    </mesh>
  )
}

export const ThreeScene = () => {
  const handleClick = useRef(() => {})
  return (
    <Canvas
      style={{ height: '50vh' }}
      className="w-full md:!h-[100vh] cursor-pointer"
      camera={{ position: [0, 5, 10] }}
      onPointerDown={() => {
        console.log('jump')
        handleClick.current()
      }}
    >
      <ambientLight />
      <directionalLight position={[0, 10, 0]} intensity={1.5} castShadow />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Ground />
        <JumpingModel handleClick={handleClick} />
      </Physics>
    </Canvas>
  )
}
