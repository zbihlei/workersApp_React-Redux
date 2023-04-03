import React from 'react';
import '../styles/index.scss';
import WorkerPanel from './workersPanel/WorkersPanel';
import WorkersForm from './workersForm/WorkersForm';
import WorkersFilter from './workersFilter/WorkersFilter';

const App =()=> {

  return (

<div className="container">
<div className='header'>
            WORKERS
        </div>

        <WorkerPanel/>
        <WorkersForm/>
        <WorkersFilter/>
</div>

    )
}

export default App;
