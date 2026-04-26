import type { ReactNode } from "react";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;

  return (
    <section className="flex">
      <div style={{ width: `${leftWeight}rem` }}>{left}</div>
      <div style={{ width: `${rightWeight}rem` }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
