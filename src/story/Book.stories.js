import React from 'react';
import Book from '../components/Book'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component: Book,
    title: 'Card Book', parameters: {
        info: {},
    },
    decorators: [withKnobs],
};
export const book = () => <Book title='test' description='{x.description}' coverUrl='https://i.harperapps.com/covers/9780062951366/x510.jpg' />;
