import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

ReactDOM.render(
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>,
  document.getElementById('root')
);
export default App;