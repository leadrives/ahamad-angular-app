import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function useMouseTilt({ max = 8, stiffness = 140, damping = 18 } = {}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness, damping });
  const sy = useSpring(my, { stiffness, damping });

  const rotateX = useTransform(sy, v => (v * max));
  const rotateY = useTransform(sx, v => (-v * max));

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    mx.set((x - 0.5) * 2);  // -1..1
    my.set((y - 0.5) * 2);  // -1..1
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return { rotateX, rotateY, onMove, onLeave };
}
