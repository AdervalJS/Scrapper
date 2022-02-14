import { useEffect } from 'react';
import { ChapterBaseProps } from '@scrapper/shared/util-interfaces';
import { RecoilState, useRecoilState } from 'recoil';
import { Container } from './chapters.styles';
import { DropSelectOption, Option } from '../../molecules/DropSelectOption';
import { Title } from '../../atoms/Title';

export type ChaptersState = RecoilState<ChaptersSelectedId>;
export type ChaptersSelectedId = number | undefined;

export interface ChaptersProps {
  data: ChapterBaseProps[];
  state: ChaptersState;
  defaultSelectedId?: ChaptersSelectedId;
}

export const Chapters: React.FC<ChaptersProps> = ({
  data,
  defaultSelectedId,
  state,
}) => {
  const [selected, setSelected] = useRecoilState(state);

  useEffect(() => {
    setSelected(defaultSelectedId);
  }, []);

  function handleClick({ value: id }: Option) {
    setSelected(Number(id));
  }

  return (
    <Container className="chapters">
      <Title>Capítulos</Title>
      {data.map((chapter) => (
        <DropSelectOption
          onPick={handleClick}
          selected={chapter.id === selected}
          option={{ label: chapter.name, value: chapter.id }}
        />
      ))}
    </Container>
  );
};
