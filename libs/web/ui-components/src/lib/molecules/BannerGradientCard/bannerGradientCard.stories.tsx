import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { BannerGradientCard, BannerGradientCardProps } from '.';

export default {
  title: 'molecules/BannerGradientCard',
  component: BannerGradientCard,
} as Meta;

const Actions: Partial<BannerGradientCardProps> = {
  onClick: () => alert('banner clicked'),
  onClickButton: () => alert('button clicked'),
};

const Template: Story<BannerGradientCardProps> = (args) => (
  <ThemeProviderWrapper>
    <BannerGradientCard {...args} {...Actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Encontre mangás de acordo com o seu gênero preferido.',
  text: 'Navegue por todos os mangás',
  buttonText: 'Ver os gêneros',
};
