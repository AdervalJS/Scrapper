import { Fragment } from 'react';

type Option = {label: string, value: string}

interface OptionsForTestProps {
  options: Option[]
}

export const OptionsForTest: React.FC<OptionsForTestProps> = ({ options }) => {
  return (
    <Fragment>
      {options.map(({ label, value }) => (
        <option onChange={(e) => console.log(e)} key={value} value={value}>
          {label}
        </option>
      ))}
    </Fragment>
  );
};
