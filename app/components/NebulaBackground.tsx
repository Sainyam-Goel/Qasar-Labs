'use client';

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";

const fragmentShader = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_colorC;

vec2 hash2(vec2 p){
  p = vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3)));
  return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise(in vec2 p){
  const float K1 = 0.366025404;
  const float K2 = 0.211324865;
  vec2 i = floor(p + (p.x + p.y) * K1);
  vec2 a = p - i + (i.x + i.y)*K2;
  vec2 o = (a.x > a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
  vec2 b = a - o + K2;
  vec2 c = a - 1.0 + 2.0*K2;
  vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
  vec3 n = h*h*h*h*vec3( dot(a, hash2(i + 0.0)), dot(b, hash2(i + o)), dot(c, hash2(i + 1.0)) );
  return dot(n, vec3(70.0));
}

float fbm(vec2 p){
  float f = 0.0;
  float amp = 0.55;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for(int i=0;i<6;i++){
    f += amp*noise(p); p = m*p; amp *= 0.5;
  }
  return f;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy - 0.5*u_resolution.xy) / u_resolution.y;

  float t = u_time * 0.05;
  float r = length(p);
  float a = atan(p.y, p.x);
  vec2 q = p + 0.25*vec2(cos(a + t*0.7), sin(a*0.7 - t));

  float n1 = fbm(q*1.5 + vec2(t, -t));
  float n2 = fbm(q*3.0 + vec2(-t*0.7, t*0.5));
  float n = smoothstep(0.0,1.0, 0.55*n1 + 0.45*n2);

  vec3 col = mix(u_colorA, u_colorB, n);
  col = mix(col, u_colorC, smoothstep(0.4, 0.95, n));

  float vignette = smoothstep(1.2, 0.1, r);
  col *= vignette;

  float stars = pow(max(0.0, noise(p*40.0 + t*2.0)), 20.0);
  col += stars*0.6;

  col = clamp(col, 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
}
`;

function NebulaShader() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(1, 1) },
      u_colorA: { value: new THREE.Color("#0ea5e9").multiplyScalar(0.7) },
      u_colorB: { value: new THREE.Color("#a855f7").multiplyScalar(0.8) },
      u_colorC: { value: new THREE.Color("#fb7185").multiplyScalar(0.7) },
    }),
    []
  );

  useFrame(({ gl, clock }) => {
    const size = gl.getSize(new THREE.Vector2());
    uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_resolution.value.set(size.width, size.height);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragmentShader}
        vertexShader={`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        uniforms={uniforms}
        transparent={false}
      />
    </mesh>
  );
}

export default function NebulaBackground() {
  return (
    <Canvas className="absolute inset-0 -z-10" camera={{ position: [0, 0, 1], fov: 45 }}>
      <NebulaShader />
      <Html prepend>
        <div className="pointer-events-none" />
      </Html>
    </Canvas>
  );
}
