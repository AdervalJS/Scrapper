import { useNavigate, useParams } from 'react-router-dom';
import { Profile as CProfile } from '@scrapper/web/ui-components';
import { mangaProfile } from '@scrapper/shared/util-test';

import { Container } from './profile.styles';

// eslint-disable-next-line
interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = mangaProfile.filter((manga) => manga.id === Number(id))[0];

  function goToProfile(id: number) {
    navigate(`/profile/${id}`);
  }

  function close() {
    navigate(-1);
  }

  return (
    <Container>
      <CProfile
        authorItemClick={({ id }) => goToProfile(id)}
        relationItemClick={({ id }) => goToProfile(id)}
        onClose={close}
        data={data}
      />
    </Container>
  );
};

export default Profile;
