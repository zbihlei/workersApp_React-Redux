import { Form } from "./Form";
import { useDispatch } from "react-redux";
import {setUser} from '../../slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogin =(email, password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token:user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))


    }
    return (
        <Form
        title = 'sign in'
        handleClick={handleLogin}/>
    )
}
export {Login}