import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

import Router from './routers';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);
