import { Route } from 'react-router-dom';
import { RoutersContainer } from './routers.container';

import Home from '../pages/Home';
import Search from '../pages/Search';
import ViewAll from '../pages/ViewAll';
import Profile from '../pages/Profile';

const Routers: React.FC = () => {
  return (
    <RoutersContainer>
      <Route path="/" element={<Home />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/search/:item" element={<Search />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/viewAll" element={<ViewAll />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
    </RoutersContainer>
  );
};

export default Routers;
