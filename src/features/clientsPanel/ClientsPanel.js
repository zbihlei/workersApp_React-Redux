import '../../styles/index.scss';
import { useCallback, useMemo } from 'react';
import {useSelector} from 'react-redux';
import ClientsItem from '../clientsItem/ClientsItem';
import { useGetClientsQuery, useDeleteClientsMutation } from '../../api/apiSlice';


const ClientsPanel =()=> {

    const { 
        data: clients = [], isLoading
    } = useGetClientsQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter);
    const highSalary = useSelector(state => state.filters.highSalary);
    const [deleteCLient]= useDeleteClientsMutation();

    const onDelete = useCallback((id)=>{
        deleteCLient(id);
        // eslint-disable-next-line  
    }, []);

    const filteredClients = useMemo(()=>{

        if (highSalary === true){
            return clients.filter(item => item.salary > 1000)
        } 

        const filteredClients = clients.slice();

        if (activeFilter === 'all'){
            return filteredClients;
        } else{
            return filteredClients.filter(item => item.position === activeFilter)
        }

        }, [clients, activeFilter,highSalary])


    const renderClients =(arr)=>{

        return arr.map(({id, ...props}) => {
            return(
                <ClientsItem key={id} {...props} onDelete={()=>onDelete(id)}/>
            )
        })
    }

    const clientsList = renderClients(filteredClients);
        return(
        <ul className='panel_container'>
                {isLoading? <h5 style={{'textAlign': 'center', 'display': 'block', 'padding': '50px', 'color':'rgba(168, 145, 145, 1)'}}>loading...</h5>: null}
                {clientsList}
        </ul>  
        );
}

export default ClientsPanel;