import { Story, Meta } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { manga } from '@scrapper/shared/util-test';
import { ItemCompacted, ItemCompactedProps } from '.';

export default {
  component: ItemCompacted,
  title: 'molecules/ItemCompacted',
} as Meta;

export const Actions: Partial<ItemCompactedProps> = {
  onPick: ({ name, id }) => alert(`pick ${name} id:${id}`),
};

const Template: Story<ItemCompactedProps> = (args) => (
  <ThemeProviderWrapper>
    <ItemCompacted {...Actions} {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: manga,
};
