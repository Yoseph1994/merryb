import React from 'react';

interface Props {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
}

export const ProgressRing: React.FC<Props> = ({
  percentage,
  size = 56,
  strokeWidth = 5,
  color = 'var(--accent-primary)',
  label
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (Math.min(100, Math.max(0, percentage)) / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Track */}
        <circle
          stroke="var(--border-subtle)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Fill */}
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <span style={{ position: 'absolute', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-main)' }}>
        {label ?? `${percentage}%`}
      </span>
    </div>
  );
};
