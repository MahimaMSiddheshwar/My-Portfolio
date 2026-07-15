import React from "react";

// Fixed layout evoking a brain-connectome / network graph — no charting library needed
const nodes = [
  { x: 80, y: 90 },
  { x: 220, y: 60 },
  { x: 360, y: 130 },
  { x: 500, y: 70 },
  { x: 640, y: 140 },
  { x: 720, y: 260 },
  { x: 600, y: 320 },
  { x: 460, y: 280 },
  { x: 320, y: 340 },
  { x: 180, y: 300 },
  { x: 100, y: 420 },
  { x: 400, y: 440 },
];

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
  [2, 7], [1, 9], [3, 6], [8, 11], [7, 11], [10, 9], [10, 11],
];

const NetworkGraphBackground = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="1"
          className="network-edge"
          style={{ animationDelay: `${(i % 6) * 0.4}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r="5"
          fill="currentColor"
          className="network-node"
          style={{ animationDelay: `${(i % 5) * 0.5}s` }}
        />
      ))}
    </svg>
  );
};

export default NetworkGraphBackground;
