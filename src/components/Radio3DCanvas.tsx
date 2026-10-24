"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Radio as RadioIcon, Eye, RotateCw } from "lucide-react";
import Image from "next/image";

interface Radio3DCanvasProps {
  isPlaying?: boolean;
}

export default function Radio3DCanvas({ isPlaying = false }: Radio3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"3d-interactive" | "studio-prop">("3d-interactive");
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (viewMode !== "3d-interactive") return;
    const container = mountRef.current;
    if (!container) return;

    // WebGL support check
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 420;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainSpot = new THREE.SpotLight(0xf97316, 4.5); // Broadcast amber
    mainSpot.position.set(4, 5, 4);
    mainSpot.angle = Math.PI / 4;
    mainSpot.penumbra = 0.5;
    mainSpot.castShadow = true;
    scene.add(mainSpot);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.0); // Cyan rim light
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    const bottomWarmFill = new THREE.PointLight(0xeab308, 1.8, 10);
    bottomWarmFill.position.set(0, -2, 2);
    scene.add(bottomWarmFill);

    // 3. 3D Radio Model Group
    const radioGroup = new THREE.Group();
    scene.add(radioGroup);

    // Cabinet Body (Rounded box-like aesthetic)
    const cabinetGeo = new THREE.BoxGeometry(3.0, 1.8, 1.3);
    const cabinetMat = new THREE.MeshStandardMaterial({
      color: 0x16181f,
      roughness: 0.35,
      metalness: 0.75,
    });
    const cabinet = new THREE.Mesh(cabinetGeo, cabinetMat);
    cabinet.castShadow = true;
    cabinet.receiveShadow = true;
    radioGroup.add(cabinet);

    // Amber Golden Front Bezel
    const bezelGeo = new THREE.BoxGeometry(2.86, 1.66, 0.08);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xc27803,
      metalness: 0.9,
      roughness: 0.25,
    });
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.position.z = 0.66;
    radioGroup.add(bezel);

    // Speaker Grille Left
    const speakerRingGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.08, 32);
    speakerRingGeo.rotateX(Math.PI / 2);
    const speakerRingMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      metalness: 0.8,
      roughness: 0.4,
    });
    const leftSpeaker = new THREE.Mesh(speakerRingGeo, speakerRingMat);
    leftSpeaker.position.set(-0.8, 0.15, 0.68);
    radioGroup.add(leftSpeaker);

    // Left Speaker Cone (moves with sound)
    const coneGeo = new THREE.ConeGeometry(0.38, 0.14, 24);
    coneGeo.rotateX(Math.PI / 2);
    const coneMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.3,
      metalness: 0.6,
    });
    const leftCone = new THREE.Mesh(coneGeo, coneMat);
    leftCone.position.set(-0.8, 0.15, 0.69);
    radioGroup.add(leftCone);

    // Right Tuning & Frequency Display Panel
    const tunerPanelGeo = new THREE.BoxGeometry(1.2, 0.95, 0.05);
    const tunerPanelMat = new THREE.MeshStandardMaterial({
      color: 0x05070a,
      metalness: 0.9,
      roughness: 0.1,
    });
    const tunerPanel = new THREE.Mesh(tunerPanelGeo, tunerPanelMat);
    tunerPanel.position.set(0.68, 0.25, 0.68);
    radioGroup.add(tunerPanel);

    // Tuning scale glass glow
    const glassGeo = new THREE.BoxGeometry(1.1, 0.4, 0.02);
    const glassMat = new THREE.MeshBasicMaterial({
      color: 0xff8c00,
      transparent: true,
      opacity: 0.65,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0.68, 0.42, 0.72);
    radioGroup.add(glass);

    // 88.4 FM Tuning Needle (Bright Neon Red/Orange)
    const needleGeo = new THREE.BoxGeometry(0.025, 0.36, 0.03);
    const needleMat = new THREE.MeshBasicMaterial({ color: 0xff2200 });
    const needle = new THREE.Mesh(needleGeo, needleMat);
    needle.position.set(0.68, 0.42, 0.74);
    radioGroup.add(needle);

    // Tuning Knobs
    const knobGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.14, 24);
    knobGeo.rotateX(Math.PI / 2);
    const knobMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.95,
      roughness: 0.2,
    });

    const knob1 = new THREE.Mesh(knobGeo, knobMat);
    knob1.position.set(0.35, -0.1, 0.72);
    radioGroup.add(knob1);

    const knob2 = new THREE.Mesh(knobGeo, knobMat);
    knob2.position.set(0.98, -0.1, 0.72);
    radioGroup.add(knob2);

    // Brass Radio Antenna
    const antennaBaseGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.2, 16);
    const antennaBaseMat = new THREE.MeshStandardMaterial({ color: 0x78716c, metalness: 0.9 });
    const antennaBase = new THREE.Mesh(antennaBaseGeo, antennaBaseMat);
    antennaBase.position.set(1.1, 0.98, -0.3);
    radioGroup.add(antennaBase);

    const antennaMastGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.8, 16);
    antennaMastGeo.rotateZ(0.25);
    const antennaMastMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, metalness: 0.95 });
    const antennaMast = new THREE.Mesh(antennaMastGeo, antennaMastMat);
    antennaMast.position.set(1.3, 1.7, -0.3);
    radioGroup.add(antennaMast);

    // Glowing Station Audio Frequency Ring (Orbiting ring)
    const ringGeo = new THREE.TorusGeometry(2.2, 0.025, 16, 100);
    ringGeo.rotateX(Math.PI / 2.3);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.5,
    });
    const frequencyRing = new THREE.Mesh(ringGeo, ringMat);
    frequencyRing.position.y = 0.1;
    scene.add(frequencyRing);

    // Secondary subtle gold frequency ring
    const ring2Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    ring2Geo.rotateX(-Math.PI / 2.8);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.35,
    });
    const frequencyRing2 = new THREE.Mesh(ring2Geo, ring2Mat);
    frequencyRing2.position.y = 0.1;
    scene.add(frequencyRing2);

    // Floating Audio Particles
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xfb923c,
      size: 0.055,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Mouse Tracking & Interactivity
    let targetRotY = 0;
    let targetRotX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = -y * 0.25;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp smooth rotation
      radioGroup.rotation.y += (targetRotY - radioGroup.rotation.y) * 0.05;
      radioGroup.rotation.x += (targetRotX - radioGroup.rotation.x) * 0.05;

      // Gentle floating animation
      radioGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

      // Speaker cone pulsing (more intense if playing)
      const pulseRate = isPlaying ? 14 : 4;
      const pulseAmp = isPlaying ? 0.04 : 0.012;
      leftCone.position.z = 0.69 + Math.sin(elapsedTime * pulseRate) * pulseAmp;

      // Rotating tuning rings
      frequencyRing.rotation.z = elapsedTime * 0.2;
      frequencyRing2.rotation.z = -elapsedTime * 0.15;

      // Subtle knob breathing
      knob1.rotation.z = Math.sin(elapsedTime * 0.8) * 0.15;
      knob2.rotation.z = Math.cos(elapsedTime * 0.8) * 0.15;

      // Needle vibration at 88.4 FM
      needle.position.x = 0.68 + Math.sin(elapsedTime * 20) * (isPlaying ? 0.015 : 0.003);

      // Rotating particles
      particles.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      cabinetGeo.dispose();
      cabinetMat.dispose();
      bezelGeo.dispose();
      bezelMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [viewMode, isPlaying]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center justify-center">
      {/* Visual Mode Selector Tabs */}
      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-white/10 text-xs">
        <button
          onClick={() => setViewMode("3d-interactive")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all ${
            viewMode === "3d-interactive"
              ? "bg-amber-500 text-neutral-950 font-bold shadow-md"
              : "text-zinc-400 hover:text-white"
          }`}
          title="Interactive 3D Procedural Radio Model"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>3D Radio</span>
        </button>

        <button
          onClick={() => setViewMode("studio-prop")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all ${
            viewMode === "studio-prop"
              ? "bg-amber-500 text-neutral-950 font-bold shadow-md"
              : "text-zinc-400 hover:text-white"
          }`}
          title="Authentic Studio Vintage Radio Prop"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Studio Prop</span>
        </button>
      </div>

      {/* 3D Interactive Three.js Canvas */}
      {viewMode === "3d-interactive" && hasWebGL && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div ref={mountRef} className="w-full h-full min-h-[380px] cursor-grab active:cursor-grabbing" />
          
          {/* Subtle 3D Info Badge */}
          <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Interactive 3D • Move cursor to inspect • Tuned to 88.4 MHz</span>
          </div>
        </div>
      )}

      {/* Authentic Studio Prop Showcase View */}
      {(viewMode === "studio-prop" || !hasWebGL) && (
        <div className="relative w-full h-full min-h-[380px] flex items-center justify-center p-4">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-500/10 group">
            <Image
              src="/3d.jpg"
              alt="Artisan Vintage Radio Prop at Radio Alva's 88.4 FM Studio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <RadioIcon className="w-3.5 h-3.5" />
                Radio Alva&apos;s 88.4 FM Studio Collection
              </span>
              <h4 className="text-white text-lg font-bold">Artisan Gramophone Radio</h4>
              <p className="text-zinc-300 text-xs mt-1">
                The physical vintage brass radio featured in our Moodubidire broadcasting reception suite.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
