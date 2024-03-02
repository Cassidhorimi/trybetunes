import React from 'react';
import { RouterBrowser } from './routes/RouterBrowser';

class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <RouterBrowser /> 
      </main>
    );
  }
}

export default App;
