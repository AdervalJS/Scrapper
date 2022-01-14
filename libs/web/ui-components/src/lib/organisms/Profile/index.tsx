import { MangaBaseProps, MangaProfile } from '@scrapper/shared/util-interfaces';

import { BlurryImage } from '../../molecules/BlurryImage';
import { CompactItemList } from '../CompactItemList';
import { ItemCompactedData } from '../../molecules/ItemCompacted';
import { SimpleItemList } from '../SimpleItemList';
import { BaseProfile } from '../../molecules/BaseProfile';
import { CloseButton } from '../../molecules/CloserButton';

import { ContainerProps, Container, Wrapper } from './profile.styles';

export interface ProfileProps extends ContainerProps {
  data: MangaProfile;
  authorItemClick?: (props: MangaBaseProps) => void;
  relationItemClick?: (props: ItemCompactedData) => void;
  onClose?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  data,
  onClose,
  authorItemClick,
  relationItemClick,
  ...rest
}) => {
  const { image, name, moreAuthor, relation } = data;

  return (
    <Container className="profile" {...rest}>
      <CloseButton onClick={onClose} />

      <BlurryImage data={{ alt: name, imageUrl: image }}>
        <BaseProfile data={data} viewType="cover" />
      </BlurryImage>

      <Wrapper>
        <SimpleItemList
          onPick={authorItemClick}
          title="Mais do autor"
          data={moreAuthor}
        />
        <CompactItemList
          onPick={relationItemClick}
          title="Relacionados"
          data={relation}
        />
      </Wrapper>
    </Container>
  );
};
