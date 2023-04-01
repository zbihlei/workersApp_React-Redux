import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import '../../styles/index.scss'

const ClientsItem = ({name, position, salary, onDelete})=>{
   
    return(
        <Container>
            <Row>
                <Col>
                    <li>
                        <div className='itemClient'>
                        { name.toUpperCase()}
                        </div>

                        <div className='itemClient'>
                        {position.toUpperCase()}
                        </div>

                        <div className='itemClient'>
                       {salary + '$'} 
                       </div>   
                       
                       <button onClick={onDelete}>X</button>
                    </li> 
                     
                 </Col>
            </Row>
        </Container>
    );
}

export default ClientsItem;