import { Route } from 'react-router-dom';
import { RoutersContainer } from './routers.container';

import Home from '../pages/Home';

const Routers: React.FC = () => {
  return (
    <RoutersContainer>
      <Route path="/" element={<Home />} />
    </RoutersContainer>
  );
};

export default Routers;
