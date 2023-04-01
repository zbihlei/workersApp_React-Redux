import '../../styles/index.scss';
import {useGetFiltersQuery} from '../../api/apiSlice';
import { activeFilterChanged, highSalaryShow } from './clientsFilterSlice';
import { useDispatch} from 'react-redux';


const ClientsFilter = ()=>{

     const {data: filters=[], isLoading, isSuccess} =useGetFiltersQuery();
     const dispatch = useDispatch();

     const renderFilters = (arr) =>{

        return arr.map(({name}) =>{

            return <button
            onClick={()=>{dispatch(activeFilterChanged(name)); dispatch(highSalaryShow(false))}}
            key = {name}
            id={name}
            >{name.toUpperCase()}</button>
        })
     }

     const elements = renderFilters(filters);
  

    return (
            <div className='filtersWrapp'>
                <p>SORTER BY</p>
                {isLoading? <h5 
                    style={{'textAlign': 'center',
                            'display': 'block', 
                            'padding': '50px', 
                            'color':'rgba(168, 145, 145, 1)'}}>loading...</h5>: null}
                {elements}
                {isSuccess ? <button 
                            className='lastBtn'
                             onClick={()=>dispatch(highSalaryShow(true))} >MORE THAN 1000$</button> : null}
                
            </div>
    )
        

}

export default ClientsFilter;