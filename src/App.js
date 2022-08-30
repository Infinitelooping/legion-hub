import React, { useState } from 'react';
import Nav from './components/Nav';
import ArmyBuilder from './components/ArmyBuilder';
import ContactForm from './components/ContactForm';
import Information from './components/Information';
import ListData from './components/ListData';
import CustomCards from './components/CustomCards';


function App() {

  const [currentPage, setCurrentPage] = useState('information');

  const [currentArmyCategory, setCurrentArmyCategory] = useState('empire');

  function pageRender() {
    if (currentPage === 'contact') {
      return <ContactForm></ContactForm>
    } else if (currentPage === 'information') {
      return <Information></Information>
    } else if (currentPage === 'armyBuilder') {
      return <ArmyBuilder></ArmyBuilder>
    } else if (currentPage === 'listData') {
      return <ListData></ListData>
    } else if (currentPage === 'customCards') {
      return <CustomCards></CustomCards>
    }
  }

  return (
    <div>
      <header>
        <Nav  
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        currentArmyCategory = {currentArmyCategory}
        setCurrentArmyCategory = {setCurrentArmyCategory}
        ></Nav>
      </header>
      <main>
        {pageRender()}
      </main>
    </div>
  );
}

export default App;
