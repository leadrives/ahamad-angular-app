import React, { useMemo, useState, useCallback } from "react";
import styles from "./AwardsShowcase3D.module.css";

const isTouch = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const AwardsShowcase3D = ({
  items,
  initialYear,
  showYearFilter = true,
  className
}) => {
  const years = useMemo(
    () => Array.from(new Set(items.map(i => i.year))).sort((a, b) => b - a),
    [items]
  );
  const [year, setYear] = useState(
    initialYear ?? "all"
  );
  const filtered = useMemo(
    () => (year === "all" ? items : items.filter(i => i.year === year)),
    [items, year]
  );

  // flip state per card
  const [flipped, setFlipped] = useState({});
  const toggleFlip = useCallback((id) => {
    setFlipped(s => ({ ...s, [id]: !s[id] }));
  }, []);

  // parallax tilt handlers
  const onMove = (e) => {
    if (isTouch()) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -12; // rotateX
    const ry = (px - 0.5) * 16;  // rotateY
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  
  const onLeave = (e) => {
    if (isTouch()) return;
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  const rootClasses = [styles.shell, className].filter(Boolean).join(' ');

  return (
    <section className={rootClasses}>
      <div className={styles.header}>
        <h2 className={`h3 m-0 ${styles.headerTitle}`}>Awards</h2>
        {showYearFilter && years.length > 1 && (
          <div className={styles.filters}>
            <button
              className={`${styles.chip} ${year === "all" ? styles.chipActive : ''}`}
              onClick={() => setYear("all")}
            >
              All
            </button>
            {years.map(y => (
              <button
                key={y}
                className={`${styles.chip} ${year === y ? styles.chipActive : ''}`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.panel}>
        <div className={styles.watermark} aria-hidden="true">AWARDS</div>

        <div className={styles.rail} role="list">
          {filtered.map((a, idx) => (
            <div
              role="listitem"
              key={a.id}
              className={`${styles.card} ${flipped[a.id] ? styles.flipped : ''}`}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              {/* FRONT */}
              <button
                type="button"
                className={styles.faceFront}
                onClick={() => toggleFlip(a.id)}
                aria-expanded={!!flipped[a.id]}
                title={`${a.title} (${a.year})`}
              >
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className={styles.bg}
                />
                <div className={styles.meta}>
                  <span className={styles.yearPill}>{a.year}</span>
                  <div className={styles.texts}>
                    <div className={styles.title}>{a.title}</div>
                    {a.subtitle && <div className={styles.subtitle}>{a.subtitle}</div>}
                  </div>
                </div>
                <div className={styles.glare} />
              </button>

              {/* BACK */}
              <div className={styles.faceBack}>
                <div className={styles.backInner}>
                  <div className={styles.backTitle}>{a.title}</div>
                  {a.subtitle && <div className={styles.backSub}>{a.subtitle}</div>}
                  <div className={styles.backMeta}>
                    <span className={styles.badge}>{a.tag || "Achievement"}</span>
                    <span className={styles.badge}>{a.year}</span>
                  </div>
                  {a.link && (
                    <a className={styles.cta} href={a.link} target="_blank" rel="noreferrer">
                      View certificate
                    </a>
                  )}
                  <button className={styles.backClose} onClick={() => toggleFlip(a.id)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsShowcase3D;
