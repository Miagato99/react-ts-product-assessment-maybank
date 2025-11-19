import React from 'react';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'number';
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  min?: string;
  id: string;
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder,
  min,
  id 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      onChange(Number(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className="mb-6 relative">
      <Input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        label={label}
        placeholder={placeholder}
        min={min}
      />
    </div>
  );
};

export default FormField;
