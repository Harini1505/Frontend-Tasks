import React, { useState } from 'react';

export default function PhoneInput() {
  const [value, setValue] = useState('');

  const formatPhone = (num) => {
    const digits = num.replace(/\D/g, '').slice(0, 10);
    const parts = [];

    if (digits.length > 0) parts.push('(' + digits.slice(0, 3));
    if (digits.length >= 4) parts[0] += ')';
    if (digits.length >= 4) parts.push(' ' + digits.slice(3, 6));
    if (digits.length >= 7) parts.push('-' + digits.slice(6));

    return parts.join('');
  };

  const handleChange = (e) => {
    setValue(formatPhone(e.target.value));
  };

  return (
    <>
    <h3>Phone Number</h3>
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="(123) 456-7890"
    />
    </>
  );
}

