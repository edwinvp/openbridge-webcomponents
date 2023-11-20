import type { Meta, StoryObj } from '@storybook/web-components';
import { AppButton } from './AppButton';
import './AppButton';
import { iconsUrl } from '../icons';

const meta: Meta<typeof AppButton> = {
    title: 'Button/App button',
    tags: ['autodocs'],
    component: "ob-app-button",
    args: {
        size: "normal",
        icon: "06-ship",
    },
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(iconsUrl)
        },
        size: {
            control: { type: 'select' },
            options: ['normal', 'small']
        },
        label: {
            control: { type: 'text' }
        },
        checked: {
            control: { type: 'boolean' }
        }
    },
} satisfies Meta<AppButton>;

export default meta;
type Story = StoryObj<AppButton>;

export const Primary: Story = {
    args: {
    },
};

export const Checked: Story = {
    args: {
        checked: true
    },
};

export const Small: Story = {
    args: {
        size: "small"
    },
};