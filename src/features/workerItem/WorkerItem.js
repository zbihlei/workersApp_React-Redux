import '../../styles/index.scss'


const WorkerItem = ({name, position, salary, onDelete})=>{
   
    return(
<div className="workerPanelContainer">
    <div className='itemWorker'>
        <span>{name.toUpperCase()}</span>
        <span>{position.toUpperCase()}</span>  
        <span>{salary + '$'}</span>
        <button onClick={onDelete}>X</button>
    </div>
</div>
    
    );
}

export default WorkerItem;