import '../../styles/index.scss'
import './worker.scss';
import { CSSTransition } from 'react-transition-group';


const WorkerItem = ({name, position, salary, onDelete})=>{
   
    return(
<div className="workerPanelContainer">
    <CSSTransition timeout={300} classNames="newworker">
    <div className='itemWorker'>
        <span>{name.toUpperCase()}</span>
        <span>{position.toUpperCase()}</span>  
        <span>{salary + '$'}</span>
        <button onClick={onDelete}>X</button>
    </div>
    </CSSTransition>
</div>
    
    );
}

export default WorkerItem;