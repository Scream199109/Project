import type {Preview} from "@storybook/react";
import '../src/assets/styles/reset.scss';
import '../src/assets/styles/variables/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
