import { useEffect, useState } from 'react';
import { animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedCounter({ value, prefix = "", suffix = "", className = "", style }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(latest);
      }
    });
    return controls.stop;
  }, [value]);

  const formattedNumber = displayValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  
  return <span className={className} style={style}>{prefix}{formattedNumber}{suffix}</span>;
}
