import { Story, Meta } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { mangaProfile } from '@scrapper/shared/util-test';
import { Profile, ProfileProps } from '.';

export default {
  title: 'organisms/Profile',
  component: Profile,
} as Meta;

const Actions: Partial<ProfileProps> = {
  onClose: () => alert('Close'),
  authorItemClick: () => alert('item clicked'),
  relationItemClick: () => alert('item clicked'),
};

const Template: Story<ProfileProps> = (args) => (
  <ThemeProviderWrapper>
    <Profile {...Actions} {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: mangaProfile[0],
};
