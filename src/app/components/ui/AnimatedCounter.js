import { useEffect, useMemo, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix, label }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    let frameId;
    let startTime;
    const duration = 1800;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 4;
      setDisplay(value * eased);
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [started, value]);

  const formatted = useMemo(() => {
    if (value >= 1000) return Math.floor(display).toLocaleString();
    if (Number.isInteger(value)) return Math.floor(display).toString();
    return display.toFixed(1);
  }, [display, value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-3xl font-semibold text-cetacean-blue sm:text-4xl">
        {formatted}
        {suffix}
      </h3>
      <p className="mt-1 text-sm text-gray-600 sm:text-base ">{label}</p>
    </div>
  );
}
