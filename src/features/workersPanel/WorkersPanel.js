import '../../styles/index.scss';
import { useCallback, useMemo } from 'react';
import {useSelector} from 'react-redux';
import WorkerItem from '../workerItem/WorkerItem';
import { useGetWorkersQuery, useDeleteWorkerMutation } from '../../api/apiSlice';



const WorkersPanel =()=> {

    const { 
        data: workers = [], isLoading
    } = useGetWorkersQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter);
    const highSalary = useSelector(state => state.filters.highSalary);
    const [deleteWorker]= useDeleteWorkerMutation();

    const onDelete = useCallback((id)=>{
        deleteWorker(id);
        // eslint-disable-next-line  
    }, []);

    const filteredWorkers = useMemo(()=>{

        if (highSalary === true){
            return workers.filter(item => item.salary > 1000)
        } 

        const filteredWorkers = workers.slice();

        if (activeFilter === 'all'){
            return filteredWorkers;
        } else{
            return filteredWorkers.filter(item => item.position === activeFilter)
        }

        }, [workers, activeFilter,highSalary])


    const renderWorkers =(arr)=>{

        return arr.map(({id, ...props}) => {
            return(
    
                <WorkerItem key={id} {...props}  onDelete={()=>onDelete(id)}/>
           
            )
        })
    }

    const workersList = renderWorkers(filteredWorkers);
        return(
        <>
        {isLoading? <h5 style={{'textAlign': 'center', 'display': 'block', 'padding': '50px', 'color':'rgba(168, 145, 145, 1)'}}>loading...</h5>: null}
        {workersList}
        </>
        
        );
}

export default WorkersPanel;