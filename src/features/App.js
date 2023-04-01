import React from 'react';
import './App.scss';
import Header from './header/Header';
import ClientsPanel from './clientsPanel/ClientsPanel';
import ClientsForm from './clientsForm/ClientsForm';
import ClientsFilter from './clientsFilter/ClientsFilter';

const App =()=> {

  return (
    <>
         <Header/>
        <ClientsPanel/>
        <ClientsForm/>
        <ClientsFilter/>
    </>

    )
}

export default App;
