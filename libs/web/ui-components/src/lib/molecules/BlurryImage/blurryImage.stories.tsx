import { Meta, Story } from '@storybook/react';
import { manga } from '@scrapper/shared/util-test';
import { BlurryImage, BlurryImageProps } from '.';

export default {
  title: 'molecules/BlurryImage',
  component: BlurryImage,
} as Meta;

const template: Story<BlurryImageProps> = (args) => <BlurryImage {...args} />;

export const Primary = template.bind({});
Primary.args = {
  data: {
    imageUrl: manga.image,
    alt: manga.name,
  },
  style: {
    height: '360px',
  },
};
