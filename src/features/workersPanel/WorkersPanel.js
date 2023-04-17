import '../../styles/index.scss';
import { useCallback, useMemo } from 'react';
import WorkerItem from '../workerItem/WorkerItem';
import { useGetWorkersQuery, useDeleteWorkerMutation,useGetFilteredWorkerQuery, useGetHighSalaryQuery } from '../../api/apiSlice';


const WorkersPanel =({activeFilter})=> {

    const {data: workers = [], isLoading} = useGetWorkersQuery();
    const {data: filteredWorker = []} = useGetFilteredWorkerQuery(activeFilter);
    const {data: highSalaryWorkers} = useGetHighSalaryQuery();
    const [deleteWorker]= useDeleteWorkerMutation();


    const onDelete = useCallback((id)=>{
        deleteWorker(id);
        // eslint-disable-next-line  
    }, []);

    const workerList = useMemo(()=>{

        if (activeFilter === 'all'){
            return workers;
        }
        if (activeFilter === 'high'){
            return highSalaryWorkers;
        }
        else {
            return filteredWorker;
        } 

    },[activeFilter, filteredWorker, workers, highSalaryWorkers])


    const renderWorkers =(arr)=>{

        return arr.map(({id, ...props}) => {
            return(
    
                <WorkerItem key={id} {...props}  onDelete={()=>onDelete(id)}/>
           
            )
        })
    }

    const workersList = renderWorkers(workerList);
        return(
        <>
        {isLoading? <h5 style={{'textAlign': 'center', 'display': 'block', 'padding': '50px', 'color':'rgba(168, 145, 145, 1)'}}>loading...</h5>: null}
        {workersList}
        </>
        
        );
}

export default WorkersPanel;