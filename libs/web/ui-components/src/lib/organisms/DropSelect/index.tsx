import { useState } from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { DropSelectButton } from '../../molecules/DropSelectButton';
import { DropSelectOption, Option } from '../../molecules/DropSelectOption';

import { handleOptionSelect } from './dropSelect.util';
import { Container, ContainerProps, Content } from './dropSelect.styles';

export type DropSelectOptions = Option[];

export type DropSelectState = RecoilState<DropSelectOptions>;

export interface DropSelectProps extends ContainerProps {
  title: string;
  options: DropSelectOptions;
  state: DropSelectState;
  enableToggle?: boolean;
}

export const DropSelect: React.FC<DropSelectProps> = ({
  state,
  title,
  options,
  theme,
  enableToggle,
  ...rest
}) => {
  const [selecteds, setSelecteds] = useRecoilState(state);
  const [compacted, setCompacted] = useState(false);

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
            selected={selecteds?.includes(option)}
            onPick={handleClick}
          />
        ))}
      </Content>
    </Container>
  );
};
