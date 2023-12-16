import type {Meta, StoryObj} from '@storybook/web-components';
import {Tooltip, TooltipVariant} from './tooltip';
import './tooltip';
import {iconIds} from '../../icons';
import '../icon/icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Alerts & Notifications/Tooltip',
  tags: ['autodocs'],
  component: 'obc-tooltip',
  args: {
    variant: TooltipVariant.neutral,
    title: 'Title',
    text: 'Short text to tell what the note is about',
    icon: '01-placeholder',
  },
  render: (args) =>
    `<obc-tooltip variant="${args.variant}" title="${args.title}" text="${
      args.text
    }" ${args.rightArrow ? 'right-arrow' : ''}><obc-icon slot="icon" icon="${
      args.icon
    }"></obc-icon></obc-tooltip>`,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(TooltipVariant),
    },
    title: {
      control: 'text',
    },
    rightArrow: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
    icon: {
      control: {
        type: 'select',
      },
      options: iconIds,
    },
  },
} satisfies Meta<Tooltip>;

export default meta;
type Story = StoryObj<Tooltip>;

export const Neutral: Story = {
  args: {
    variant: TooltipVariant.neutral,
  },
};

export const NeutralRight: Story = {
  args: {
    variant: TooltipVariant.neutral,
    rightArrow: true,
  },
};

export const Notification: Story = {
  args: {
    variant: TooltipVariant.notification,
  },
};

export const Caution: Story = {
  args: {
    variant: TooltipVariant.caution,
  },
};

export const Warning: Story = {
  args: {
    variant: TooltipVariant.warning,
  },
};

export const Alarm: Story = {
  args: {
    variant: TooltipVariant.alarm,
  },
};
