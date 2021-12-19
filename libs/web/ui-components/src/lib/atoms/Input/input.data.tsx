import { ChangeEvent, useState } from 'react';
import Input from '.';

export const placeholder = 'search';

export function InputElementForTest() {
  const [value, setValue] = useState('');

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    setValue(ev.target.value);
  };

  return (
    <Input value={value} placeholder={placeholder} onChange={handleChange} />
  );
}
