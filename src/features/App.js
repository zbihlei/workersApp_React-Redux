import React from 'react';
import '../styles/index.scss';
import WorkerPanel from './workersPanel/WorkersPanel';
import WorkersForm from './workersForm/WorkersForm';
import WorkersFilter from './workersFilter/WorkersFilter';
import { useState } from 'react';


const App =()=> {
  const [activeFilter, setActiveFilter] = useState('all');
  return (

<div className="container">
<div className='header'>
            WORKERS
        </div>
        <WorkerPanel activeFilter={activeFilter}/>
        <WorkersForm/>
        <WorkersFilter setActiveFilter={setActiveFilter} activeFilter ={activeFilter} />
        </div>

    )
}

export default App;
