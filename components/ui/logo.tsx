import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'mark' | 'wordmark';
  className?: string;
}

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 16 L9 36 L18 56"
        stroke="#00C4B3"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M54 16 L63 36 L54 56"
        stroke="#00C4B3"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect
        x="27"
        y="27"
        width="18"
        height="18"
        rx="3"
        fill="#F4A622"
        transform="rotate(45 36 36)"
      />
    </svg>
  );
}

export function Logo({ variant = 'wordmark', className }: LogoProps) {
  if (variant === 'mark') {
    return (
      <span className={cn('inline-flex', className)}>
        <LogoMark size={28} />
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark size={28} />
      <span className="text-xl font-medium font-display text-white">
        Core<span className="text-brand-teal">Craft</span>
      </span>
    </span>
  );
}
