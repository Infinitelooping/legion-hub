import React, { useState } from 'react';
import Nav from './components/Nav'

function App() {

  const [currentPage, setCurrentPage] = useState('information');

  function pageRender() {
    if (currentPage === 'contact') {
      return <ContactForm></ContactForm>
    } else if (currentPage === 'information') {
      return <Information></Information>
    } else if (currentPage === 'armyBuilder') {
      return <ArmyBuilder></ArmyBuilder>
    } else if (currentPage === 'listData') {
      return <ListData></ListData>
    }
  }

  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        {pageRender()}
      </main>
    </div>
  );
}

export default App;
