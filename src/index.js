// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.getElementById('root'),
  {
    onCaughtError: (error, errorInfo) => {
      console.error(
        'Caught error',
        error,
        errorInfo.componentStack
      );
    }
  }
);
root.render(<App />);