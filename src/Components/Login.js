import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';


const LoginUser = ({login, mostrarError}) => {
  const [user, setUser] = useState({ username: '', password: '' });

  const _handleClick = async () => {
    try {
      await login(user.username, user.password);
    }catch(e) {
      mostrarError(e.message);
    }
  };
  const handleInput = (e)=> {
    setUser({...user, [e.target.name]:e.target.value});
  };
  return(
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space around',alignItems:'center'}}>
      <Input onChange={handleInput} name="username" placeholder="Usuario" style={{width:'200px',marginBottom:'2opx'}} />
      <br/>
      <Input.Password onChange={handleInput} name="password" placeholder="Password" style={{width:'200px'}} />
      <br/>
      <Button type="primary" onClick={_handleClick} shape="round">
        Enviar
      </Button>
      <br/>
      <Link to='/signup'>
        <a> No tienes cuenta? Registrate</a>
      </Link>
    </div>
  );
}

export default LoginUser;
