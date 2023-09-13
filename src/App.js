import React, { useState } from 'react';
import Nav from './components/Nav';
import ArmyBuilder from './components/ArmyBuilder';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import ListData from './components/ListData';
import CustomCards from './components/CustomCards';


function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const [currentArmyCategory, setCurrentArmyCategory] = useState('empire');

  function pageRender() {
    if (currentPage === 'contact') {
      return <ContactForm></ContactForm>
    } else if (currentPage === 'home') {
      return <Home></Home>
    } else if (currentPage === 'armyBuilder') {
      return <ArmyBuilder currentArmyCategory = {currentArmyCategory}></ArmyBuilder>
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
