import React from "react";

export default function AwardsProgressRail({ count, progress, onJump }) {
  if (count < 2) return null;
  
  // Calculate which card is currently active based on progress
  const step = 1 / (count + 1);
  const activeIndex = Math.max(0, Math.min(count - 1, Math.floor(progress / step)));
  
  return (
    <div className="awards-rail">
      {Array.from({ length: count }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={i}
            className={`rail-dot${active ? " active" : ""}`}
            aria-label={`Go to award ${i + 1}`}
            onClick={() => onJump(i)} // Pass card index directly
          />
        );
      })}
    </div>
  );
}
