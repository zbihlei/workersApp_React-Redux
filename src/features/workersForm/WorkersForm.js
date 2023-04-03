import '../../styles/index.scss'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useCreateWorkerMutation } from '../../api/apiSlice';

const WorkersForm = ()=>{

    const [createWorker] = useCreateWorkerMutation();

    const onSubmitHandler =(value)=>{
    
        const newCLient = {
            id: uuidv4(),
            name: value.name,
            position: value.position,
            salary: value.salary
        }
        createWorker(newCLient);
    
    }

    return(
        <Formik
        initialValues={{
            name: '',
            position: '',
            salary: ''
        }}
        validationSchema ={
         Yup.object({
                name: Yup.string()
                        .min(2, 'Minimum 2 symb.') 
                        .required('Required field!'),
                position: Yup.string()
                        .min(2, 'Minimum 2 symb.') 
                        .required('Required field!'),
                 salary: Yup.number()
                        .min(2, 'Minimum 2 symb.') 
                        .required('Required field!'),
            })}
        onSubmit = {(value, {resetForm}) => {onSubmitHandler(value); resetForm()}}
        >

            
    <Form>
    <div className="workerForm">
        <div>
          
            <label htmlFor='name'>NAME</label>
            <Field type='text' 
                   name ='name'
                   className='formFieldInput'
                   id='name'
                   
            />
        <ErrorMessage name='name' className='errorValidate' component='div'/>
            </div>
  
        <div className='formField_middle'>
      
            <label htmlFor='position'>POSITION</label>
            <Field type='text' 
                   name ='position'
                   className='formFieldInput'
                   id='position'
                   
            />
        <ErrorMessage name='position' className='errorValidate' component='div'/>
            </div>
        
        < div>
        
            <label htmlFor='salary'>SALARY</label>
            <Field type='text' 
                   name ='salary'
                   placeholder = '$'
                   className='formFieldInput'
                   id='salary'
                   
            />
         <ErrorMessage name='salary' className='errorValidate' component='div'/>
            </div>
    </div>
    <button className='btnSub' type='submit'>ADD</button> 
    </Form>
        </Formik>     
    );

}


export default WorkersForm;