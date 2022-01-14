import { Route } from 'react-router-dom';
import { RoutersContainer } from './routers.container';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routers: React.FC = () => {
  return (
    <RoutersContainer>
      <Route path="/" element={<Home />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
    </RoutersContainer>
  );
};

export default Routers;
