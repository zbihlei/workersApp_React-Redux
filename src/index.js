import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './features/App';
import './styles/index.scss';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './firebase';



const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>

    <Provider store={store}>
  <Router>
    <Routes>
      <Route path='/' element = {<App/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/register' element = {<RegisterPage/>}/>
    </Routes>
  </Router>
    </Provider>
  
  </React.StrictMode>
);


