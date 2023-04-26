import { Link } from "react-router-dom";
import { SignUp } from "../features/auth/SignUp";
import '../styles/index.scss';

 
 const RegisterPage = () => {
   return (
     <div className="authpage">
        <h1 className="authpage_head">Register Page</h1>
        <div className="authpage_form">
        <SignUp/>
        </div>
        <div className="authpage_link">or login <Link to='/login'>Login</Link></div>
     </div>
   )
 }
 
 export default RegisterPage;