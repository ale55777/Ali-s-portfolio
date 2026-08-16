import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 25, suffix: '+', label: 'Projects Built' },
  { value: 3,  suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'UK Clients Served' },
  { value: 3.5, suffix: '',  label: 'CGPA at FAST' },
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="stat-card hud-card">
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}
