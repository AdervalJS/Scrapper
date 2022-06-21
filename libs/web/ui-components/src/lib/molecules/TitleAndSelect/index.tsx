import { useEffect } from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { useTheme } from 'styled-components';
import { FilterOption, Theme, Order } from '@scrapper/shared/util-interfaces';

import { Select } from '../../atoms/Select';
import { Container, ContainerProps } from './titleAndSelect.styles';

export interface TitleAndSelectProps extends ContainerProps {
  label: string;
  options: FilterOption<string | number>[];
  state: RecoilState<Order>;
  onOptionSelect?: (option: string | number) => void;
  defaultSelected?: Order;
}

export const TitleAndSelect: React.FC<TitleAndSelectProps> = ({
  label,
  options,
  onOptionSelect,
  defaultSelected,
  state,
  ...rest
}) => {
  const [selected, setSelected] = useRecoilState(state);
  const theme = useTheme() as Theme;

  useEffect(() => {
    if (defaultSelected) setSelected(defaultSelected);
  }, []); //eslint-disable-line

  function handleSelect(selected: string) {
    if (onOptionSelect) onOptionSelect(selected);
    setSelected(selected as Order);
  }

  return (
    <Container id="titleAndSelect" theme={theme} {...rest}>
      {label}
      <Select value={selected} onChange={(e) => handleSelect(e.target.value)}>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Container>
  );
};
