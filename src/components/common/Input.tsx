import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, fullWidth = false, ...props }, ref) => {
    return (
      <div className={cn('form-group', fullWidth && 'w-full')}>
        {label && <label htmlFor={props.id}>{label}</label>}
        <input
          className={cn(
            error ? 'input-error' : '',
            fullWidth && 'w-full',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;