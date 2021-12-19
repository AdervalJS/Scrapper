import * as routerDom from 'react-router-dom';
import './link.styles.css';

export type LinkProps = routerDom.LinkProps;

export const Link: React.FC<routerDom.LinkProps> = (props) => {
  return <routerDom.Link id="link" color="none" {...props} />;
};
