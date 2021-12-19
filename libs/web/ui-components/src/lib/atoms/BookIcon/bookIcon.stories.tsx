import { Meta, Story } from '@storybook/react';

import { BookIcon, BookIconProps } from '.';

export default {
  title: 'atoms/BookIcon',
  component: BookIcon,
} as Meta;

const Template: Story<BookIconProps> = (args) => <BookIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 60,
  color: '#000',
};
