import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Button from '../src/components/Button';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};

export const Primary = () => (
    <Button
        type="primary"
        color={text("Color", "#1577ff")}
        disableElevation={boolean("DisableElevation", false)}
        width={text("Width", "")}
        onClick={action('clicked')}
        disabled={boolean("Disabled", false)}
    >
        {text("Label", "Hello Storybook")}
    </Button>
);
