import { Form } from "./Form";
import { useDispatch } from "react-redux";
import {setUser} from '../../slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = ()=>{

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleRegister =(email, password)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <Form
        title ='register'
        handleClick={handleRegister}
        />
    )

}

export {SignUp}

