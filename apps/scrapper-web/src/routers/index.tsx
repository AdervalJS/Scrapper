import { Route, useLocation } from 'react-router-dom';
import { RoutersContainer } from './routers.container';

import Home from '../pages/Home';
import Search from '../pages/Search';
import ViewAll from '../pages/ViewAll';
import Profile from '../pages/Profile';
import Read from '../pages/Read';

const Routers: React.FC = () => {
  const { pathname } = useLocation();

  function isReading() {
    const [route] = pathname.replace('/', '').split('/');

    if (route === 'read') {
      return true;
    }

    return false;
  }

  return (
    <RoutersContainer isFocused={isReading()}>
      <Route path="/" element={<Home />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/search/:item" element={<Search />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/viewAll" element={<ViewAll />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/read/:id" element={<Read />} />
    </RoutersContainer>
  );
};

export default Routers;
