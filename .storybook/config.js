// import 'typeface-roboto'

import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming';
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom' //


import docsTheme from './theme'
import appTheme from '../src/_theme'

// import { GlobalStyle } from '../src/components/shared/global';

addParameters({
  options: {
    showRoots: true,
    theme: docsTheme,
    storySort: (a, b) => {
      const getPriority = (id) => {
        var priority = '';

        if (id.indexOf('general-') > -1) {
          priority = '0'
        }
        else {
          priority = 'z';
        }

        if (id.includes('--page')) {
          priority = priority + '0';
        }
        return priority;
      }

      const aPriority = getPriority(a[1].id);
      const bPriority = getPriority(b[1].id);

      return `${aPriority}${a[1].id}`.localeCompare(`${bPriority}${b[1].id}`);
    }
  },
});

addDecorator(withA11y);
addDecorator(story => (
  <div className="App">
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        {story()}
      </BrowserRouter>
    </ThemeProvider>
  </div>
));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);

// loadFontsForStorybook();