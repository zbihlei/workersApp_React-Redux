import React from 'react';
import '../styles/index.scss';
import WorkerPanel from './workersPanel/WorkersPanel';
import WorkersForm from './workersForm/WorkersForm';
import WorkersFilter from './workersFilter/WorkersFilter';
import { useState} from 'react';
import {useAuth} from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from '../slices/userSlice';


const App =()=> {
  const [activeFilter, setActiveFilter] = useState('all');
  const {isAuth} = useAuth();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const test =()=>{
    navigate('/login')
    return (
      <div className="open_wrapp">
        <h3>welcome!</h3>
        <button className='btn_open' onClick={()=>navigate('/login')}>open</button>
      </div>
    )
  }
  return isAuth ? (

<div className="container">  
<div className='header'>
            WORKERS
            <button className='btn_logout'  onClick={()=>dispatch(removeUser())}>Log out</button>
        </div>
        <WorkerPanel activeFilter={activeFilter}/>
        <WorkersForm/>
        <WorkersFilter setActiveFilter={setActiveFilter} activeFilter ={activeFilter} />
        </div>
 
    ) : (
      test()
    )
}

export default App;
