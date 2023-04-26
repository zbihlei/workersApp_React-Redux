import { Link } from "react-router-dom";
import { Login } from "../features/auth/Login";
import '../styles/index.scss';

const LoginPage = () => {


  return ( 
  <div className="authpage">
    <h1 className="authpage_head">Login Page</h1>
    <div className="authpage_form">
       <Login/>
    </div>
      <div className="authpage_link">You can log in or <Link to='/register'>Register</Link></div>
    </div>
  )
}

export default LoginPage;