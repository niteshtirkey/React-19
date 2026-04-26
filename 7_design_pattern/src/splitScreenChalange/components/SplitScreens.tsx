import type { ReactNode } from "react";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWeight: number;
  rightWeight: number;
}

const SplitScreens = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;

  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;

  return (
    <section className="flex h-screen">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }} className="flex-1 overflow-auto">{right}</div>
    </section>
  );
};

export default SplitScreens;
