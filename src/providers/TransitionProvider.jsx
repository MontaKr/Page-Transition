"use client";

import { TransitionRouter } from "nex-transition-router";

export default function TransitionProvider({ children }) {
  return <TransitionRouter auto>{children}</TransitionRouter>;
}
