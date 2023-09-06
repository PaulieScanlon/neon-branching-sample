import React from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
