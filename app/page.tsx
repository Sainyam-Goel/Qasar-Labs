'use client';

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";

// GLSL fragment shader (fbm nebula)
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

function Background() {
  return (
    <Canvas className="absolute inset-0 -z-10" camera={{ position: [0, 0, 1], fov: 45 }}>
      <NebulaShader />
      <Html prepend>
        <div className="pointer-events-none" />
      </Html>
    </Canvas>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur bg-black/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-sky-400 via-violet-500 to-rose-400" />
          <span className="font-semibold tracking-wide text-white">Qasar Labs</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <a className="hover:text-white" href="#work">Work</a>
          <a className="hover:text-white" href="#capabilities">Capabilities</a>
          <a className="hover:text-white" href="#approach">Approach</a>
          <a className="hover:text-white" href="#contact">Contact</a>
          <a className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20" href="#contact">Start a project</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-300">Applied AI • Secure Systems • Custom Hardware</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Engineering reliable intelligence for the real world
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          We design, harden, and deploy edge‑to‑cloud AI systems for critical environments — from concept to field‑ready.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-slate-100">
            Engage Qasar Labs
          </a>
          <a href="#work" className="rounded-full border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10">
            See work
          </a>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(124,58,237,.18),transparent)]" />
      </div>
    </section>
  );
}

function LogoBelt() {
  const logos = ["Kubernetes","Docker","WireGuard","Ansible","PyTorch","ONNX","NVIDIA","ARM"];
  return (
    <section className="relative border-t border-white/10 bg-black/40 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-slate-400">
          Built on open standards, trusted by teams working at scale
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          {logos.map((l) => (
            <div key={l} className="text-slate-300">
              <svg className="h-6 w-auto" viewBox="0 0 200 40" fill="currentColor" aria-hidden>
                <rect x="0" y="16" width="200" height="8" rx="4" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { title: "Private & Edge AI", body: "Compression, distillation, and retrieval tuned for low‑latency inference at the edge. Data never leaves your perimeter." },
    { title: "DevSecOps & Platform Engineering", body: "Reproducible builds, zero‑trust networking, SBOMs, and policy‑as‑code. Supply‑chain security by default." },
    { title: "Unique Hardware", body: "From ruggedized carriers to custom gateways. Thermal budgets met, EMI/EMC compliant, latency shaved to the bone." },
    { title: "Model Evaluation & Safety", body: "Ground truth harnesses, red‑team pipelines, and continuous eval dashboards. Reliability you can measure." },
    { title: "Data Tooling", body: "Labeling, weak supervision, and governance that survives audits. Privacy‑preserving by design." },
    { title: "Systems Integration", body: "K8s, service mesh, observability, and fleet orchestration tuned for constrained, contested networks." }
  ];
  return (
    <section id="capabilities" className="relative py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Capabilities</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Flexible engagement: audits, prototypes, pilots, and production programs. We prefer shipping to posturing.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-violet-500 to-rose-400" />
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-slate-300">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitCase() {
  return (
    <section id="work" className="relative py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Edge inference in denied environments</h2>
          <p className="mt-4 text-slate-300">
            We deployed multi‑modal perception across a fleet with intermittent comms, hard power caps, and adversarial conditions.
            Quantization + pruning brought latency from 78ms → 24ms (P95) while preserving accuracy.
          </p>
          <ul className="mt-6 space-y-2 text-slate-300">
            <li>• P95 latency 3× improvement</li>
            <li>• Energy per inference −41%</li>
            <li>• Secure OTA with SBOM attestation</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="h-full w-full bg-[linear-gradient(120deg,rgba(14,165,233,.25),transparent),linear-gradient(300deg,rgba(168,85,247,.25),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { k: "Latency", v: "≤25 ms", s: "Edge vision P95" },
    { k: "Deployments", v: "40+", s: "Fielded systems" },
    { k: "Coverage", v: "24/7", s: "Observability & on‑call" },
    { k: "Hardening", v: "CIS L2", s: "Baseline & audits" }
  ];
  return (
    <section className="relative border-y border-white/10 bg-black/40 py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-sm uppercase tracking-widest text-slate-400">{s.k}</div>
            <div className="mt-2 text-3xl font-semibold">{s.v}</div>
            <div className="mt-1 text-slate-400">{s.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { t: "Discover", d: "We listen, read the room, and instrument the system." },
    { t: "Design", d: "Threat model, constraints, and tests drive architecture." },
    { t: "Develop", d: "Tight loops from prototype to pilot to production." },
    { t: "Deploy", d: "Docs, SBOMs, and handover that survives real life." }
  ];
  return (
    <section id="approach" className="relative py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Approach</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-violet-500 to-rose-400" />
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-slate-300">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Start a project</h2>
          <p className="mt-3 max-w-xl text-slate-300">
            Tell us about your constraints. We’ll bring clarity, not jargon.
          </p>
          <div className="mt-8 space-y-3 text-slate-300">
            <div>✉︎ hello@qasarlabs.com</div>
            <div>✆ +91 00000 00000</div>
            <div>Mon–Fri · 09:00–18:00 IST</div>
          </div>
        </div>
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-white/20 focus:ring" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-white/20 focus:ring" placeholder="you@company.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-slate-300">Project brief</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-white/20 focus:ring" placeholder="What are you building? Where does it run? What’s hard?" />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-lg bg-white px-4 py-2 font-medium text-black hover:bg-slate-100">
            Send inquiry
          </button>
          <p className="mt-2 text-center text-xs text-slate-400">This demo button is client‑only; wire it to your backend or a form service.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3 text-white">
          <div className="h-5 w-5 rounded-md bg-gradient-to-br from-sky-400 via-violet-500 to-rose-400" />
          <span className="font-medium">Qasar Labs</span>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Qasar Labs. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black">
      <Background />
      <Nav />
      <Hero />
      <LogoBelt />
      <Capabilities />
      <SplitCase />
      <Numbers />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
