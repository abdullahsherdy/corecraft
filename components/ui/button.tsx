import { cloneElement, isValidElement, type ReactElement } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?:    Size;
  asChild?: boolean;
}

const variants: Record<Variant, string> = {
  primary:   'bg-brand-amber text-brand-midnight hover:bg-amber-400 font-medium',
  secondary: 'bg-brand-navy text-white hover:bg-brand-navy-muted font-medium',
  ghost:     'text-brand-teal underline-offset-4 hover:underline',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({ variant = 'primary', size = 'md', className, asChild = false, children, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:opacity-50',
    variants[variant],
    sizes[size],
    className
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, { className: cn(classes, child.props.className) });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
