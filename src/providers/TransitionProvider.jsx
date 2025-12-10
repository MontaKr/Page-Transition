"use client";

import { useRef, useEffect } from "react";
import { TransitionRouter } from "nex-transition-router";
import gasp from "gsap";

const BLOCK_SIZE = 60;

export default function TransitionProvider({ children }) {
  const transitionGridRef = useRef(null);
  const blockRef = useRef([]);

  const createTransitionGrid = () => {
    if (!transitionGridRef.current) return;

    const container = transitionGridRef.current;
    container.innerHTML = "";
    blocksRef.current = [];

    const gridWidth = window.innerWidht;
    const gridHeight = window.innerHeight;
    const columns = Math.ceil(gridWidth / BLOCK_SIZE);
    const rows = Math.ceil(gridHeight / BLOCK_SIZE) + 1;
    const offsetX = (gridWidth - columns * BLOCK_SIZE) / 2;
    const offsetY = (gridWidth - rows * BLOCK_SIZE) / 2;
  };

  return (
    <TransitionRouter auto>
      <div ref={transitionGridRef} className="transition-grid" />
      {children}
    </TransitionRouter>
  );
}
