import '../../styles/index.scss';
import {useGetFiltersQuery} from '../../api/apiSlice';


const WorkersFilter = ({setActiveFilter})=>{

     const {data: filters=[], isLoading, isSuccess} =useGetFiltersQuery();

     const renderFilters = (arr) =>{

        return arr.map(({name}) =>{

            return <button
            onClick={()=> setActiveFilter(name)}
            key = {name}
            id={name}
            >{name.toUpperCase()}</button>
        })
     }

     const elements = renderFilters(filters);
  

    return (
            <div className='filtersWrapp'>
                <span>SORTED BY:</span>
                {isLoading? <h5 
                    style={{'textAlign': 'center',
                            'display': 'block', 
                            'padding': '50px', 
                            'color':'rgba(168, 145, 145, 1)'}}>loading...</h5>: null}
                {elements}
                {isSuccess ? <button 
                            className='lastBtn'
                            value = 'high'
                            onClick={(e)=>setActiveFilter(e.target.value)}
                              >MORE THAN 1000$</button> : null}
                
            </div>
    )
        

}

export default WorkersFilter;