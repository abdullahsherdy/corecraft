import { cn } from '@/lib/utils';

type BadgeVariant = 'track' | 'level' | 'default';

interface BadgeProps {
  children:   React.ReactNode;
  variant?:   BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  track:   'bg-brand-teal/10 text-brand-teal',
  level:   'bg-brand-amber/10 text-brand-midnight',
  default: 'bg-brand-fog text-brand-navy',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium font-body',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
