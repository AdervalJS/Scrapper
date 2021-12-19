import { useTheme } from 'styled-components';
import { FilterOption, Theme } from '@scrapper/shared/util-interfaces';
import { Select } from '../../atoms/Select';

import { Container, ContainerProps } from './titleAndSelect.styles';

export interface TitleAndSelectProps extends ContainerProps {
  label: string;
  options: FilterOption<string | number>[];
  onOptionSelect?: (option: string | number) => void;
}

export const TitleAndSelect: React.FC<TitleAndSelectProps> = ({
  label,
  options,
  onOptionSelect,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  function handleSelect(selected: string) {
    if (onOptionSelect) onOptionSelect(selected);
  }

  return (
    <Container id="titleAndSelect" theme={theme} {...rest}>
      {label}
      <Select onChange={(e) => handleSelect(e.target.value)}>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Container>
  );
};
