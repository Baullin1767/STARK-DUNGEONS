'use client';

import Link from 'next/link';
import {Sparkles} from 'lucide-react';
import {HTMLAttributes} from 'react';

type MagicButtonProps = HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function MagicButton({href, variant = 'primary', children, className = '', ...props}: MagicButtonProps) {
  const classes = [
    'group inline-flex min-h-12 items-center justify-center gap-2 clip-fantasy px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/70',
    variant === 'primary'
      ? 'bg-gold text-night shadow-glow hover:bg-parchment'
      : 'gold-border bg-night/45 text-bone hover:border-gold hover:bg-gold/10',
    className
  ].join(' ');

  const content = (
    <>
      <Sparkles className="h-4 w-4 transition group-hover:rotate-12" aria-hidden />
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as HTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as HTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
