import { logoSvg } from '@scrapper/shared/assets';
import { Content, ContentProps } from './logoIcon.styles';

export type LogoIconProps = ContentProps;

export const LogoIcon: React.FC<LogoIconProps> = (props) => {
  return <Content id="logoIcon" src={logoSvg} alt="LogoIcon" {...props} />;
};
