import React from 'react';
import './App.css';
import { Button, Pane, Text, majorScale } from 'evergreen-ui';

function App() {
    const alarm = () => {
        alert("Hi~");
    };


  return (
    <div className="App">
      <header className="App-header">
          <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
              <Button marginTop={16} appearance="primary" onClick={alarm}>
                  Connect Wallet
              </Button>
          </Pane>

      </header>
    </div>
  );
}

export default App;
