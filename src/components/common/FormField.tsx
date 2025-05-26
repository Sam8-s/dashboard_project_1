import React from 'react';
import { UseFormRegister, Path, FieldValues, FieldError, RegisterOptions } from 'react-hook-form';
import Input from './Input';

interface FormFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  error?: FieldError;
  label?: string;
  type?: string;
  placeholder?: string;
  options?: RegisterOptions;
  required?: boolean;
  fullWidth?: boolean;
}

function FormField<TFormValues extends FieldValues>({
  name,
  register,
  error,
  label,
  type = 'text',
  placeholder,
  options = {},
  required = false,
  fullWidth = false,
}: FormFieldProps<TFormValues>) {
  return (
    <Input
      id={name}
      type={type}
      placeholder={placeholder}
      label={label ? (required ? `${label} *` : label) : undefined}
      error={error?.message}
      fullWidth={fullWidth}
      {...register(name, options)}
    />
  );
}

export default FormField;