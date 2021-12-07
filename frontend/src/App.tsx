import React from 'react';
import { Heading, Pane, Popover, Position, toaster, Menu, PeopleIcon, CircleArrowRightIcon, EditIcon, TrashIcon, Button } from 'evergreen-ui'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
      <Pane>
          <Header />

          <Main />

      </Pane>
  );
}

export default App;
