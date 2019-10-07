import React, {useState} from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

const SignUp = ({ signup, mostrarError }) => {
  const [user, setUser] = useState({username: '', password: ''});

  const _handleClick = async () => {
    try {
      await signup({username: user.username, password: user.password});
    }catch(e) {
      mostrarError(e.message);
    }
  };
  const handleInput = (e)=> {
    setUser({...user, [e.target.name]: e.target.value});
  };
  return(
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space around',alignItems:'center'}}>
      <Input name="username" onChange={handleInput} placeholder="Usuario" style={{width:'200px',marginBottom:'2opx'}} />
      <br/>
      <Input.Password name="password" onChange={handleInput} placeholder="Password" style={{width:'200px'}} />
      <br/>
      <Button type="primary" onClick={_handleClick} shape="round">
        Enviar
      </Button>
      <br/>
      <Link to='/login'>
        <a> Ya tienes cuenta? Logeate!</a>
      </Link>
    </div>
  );
}

export default SignUp;
