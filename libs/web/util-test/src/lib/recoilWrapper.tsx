import { RecoilRoot } from 'recoil';

export const RecoilWrapper: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
