"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface AuroraProps {
  colorStops?: string[];
  speed?: number;
  blend?: number;
  amplitude?: number;
}

export default function Aurora({
  colorStops = ["#22C55E", "#055310", "#113e17", "#F0F9FF"],
  speed = 0.8,
  blend = 0.6,
  amplitude = 0.7,
}: AuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer();
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;

        void main() {
          vec3 color = vec3(
            0.2 + 0.3 * sin(uTime + vUv.x * 3.0),
            0.3 + 0.3 * sin(uTime + vUv.y * 3.0),
            0.6
          );
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", resize);
    resize();

    let animationFrame: number;

    function update(t: number) {
      animationFrame = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }

    update(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      containerRef.current?.removeChild(gl.canvas);
    };
  }, [speed]);

  return <div ref={containerRef} className="w-full h-full" />;
}
