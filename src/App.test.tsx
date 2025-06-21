import React from 'react';
// import ReactDOMClient from 'react-dom/client';
import App from './App';
import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux'

import store from './store'

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
  },
});

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
  <App />
  
  </Provider>
  </ThemeProvider>);
});

// import { translateToGerman } from './translate';


// test('string Hello World is scrambled', () => {
//   expect(translateToGerman('Hello World')).not.toBe('Hello World')
// })
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOMClient.createRoot(div).render(<App />);
// });