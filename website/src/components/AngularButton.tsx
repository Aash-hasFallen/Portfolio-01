import React from 'react';

interface AngularButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const AngularButton: React.FC<AngularButtonProps> = ({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  const baseClass =
    variant === 'primary' ? 'btn-crimson-angular' : 'btn-secondary-angular';

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
};

