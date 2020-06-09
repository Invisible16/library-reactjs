// .storybook/preview.js
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 

import '../src/index.css';
