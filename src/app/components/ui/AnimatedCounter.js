import { useEffect, useMemo, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix, label, fromValue }) {
  const startValue = Number.isFinite(fromValue) ? fromValue : 0;
  const targetValue = Number.isFinite(value) ? value : 0;
  const [display, setDisplay] = useState(startValue);
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
      setDisplay(startValue + (targetValue - startValue) * eased);
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [startValue, started, targetValue]);

  const formatted = useMemo(() => {
    if (targetValue >= 1000) return Math.floor(display).toLocaleString();
    if (Number.isInteger(targetValue)) return Math.floor(display).toString();
    return display.toFixed(1);
  }, [display, targetValue]);

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
