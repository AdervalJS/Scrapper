import { useEffect, useState } from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { DropSelectButton } from '../../molecules/DropSelectButton';
import { DropSelectOption, Option } from '../../molecules/DropSelectOption';

import { handleOptionSelect } from './dropSelect.util';
import { Container, ContainerProps, Content } from './dropSelect.styles';

export type DropSelectOptions = Option[];

export type DropSelectState = RecoilState<DropSelectSelecteds>;

export type DropSelectSelecteds = string[];

export interface DropSelectProps extends Omit<ContainerProps, 'default'> {
  title: string;
  options: DropSelectOptions;
  state: DropSelectState;
  enableToggle?: boolean;
  defaultSelecteds?: DropSelectSelecteds;
}

export const DropSelect: React.FC<DropSelectProps> = ({
  state,
  title,
  options,
  theme,
  enableToggle,
  defaultSelecteds,
  ...rest
}) => {
  const [selecteds, setSelecteds] = useRecoilState(state);
  const [compacted, setCompacted] = useState(false);

  useEffect(() => {
    if (defaultSelecteds) setSelecteds(defaultSelecteds);
  }, []);

  function toggleCompacted() {
    setCompacted(!compacted);
  }

  function handleClick(optionSelected: Option) {
    handleOptionSelect(optionSelected, selecteds, setSelecteds, enableToggle);
  }

  return (
    <Container id="dropSelect" theme={theme} {...rest}>
      <DropSelectButton
        theme={theme}
        onClick={toggleCompacted}
        title={title}
        compacted={compacted}
      />

      <Content compacted={compacted}>
        {options?.map((option) => (
          <DropSelectOption
            theme={theme}
            option={option}
            key={option.label}
            selected={selecteds?.includes(String(option.value))}
            onPick={handleClick}
          />
        ))}
      </Content>
    </Container>
  );
};
