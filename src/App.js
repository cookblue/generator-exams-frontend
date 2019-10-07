import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ViewSearch from './Views/Searchs'
import ViewQuestions from './Views/Questions'
import ViewLogin from './Views/Login'
import ViewSignUp from './Views/SignUp'

import Container from './Components/Container'

import "antd/dist/antd.css";

import {
  deleteToken,
  getToken,
  initAxiosInterceptors,
  setToken
} from "./Helpers/auth-helpers";

initAxiosInterceptors();

function App() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  async function pedirUsuario() {
    const token = getToken();

    if (token) {
      console.log('SE LOGEO POR QUE HAY TOKEN');
      try {
        const { data: { username } } = await Axios.post('/usuarios/whoami');
        setUsuario(username);

      } catch (e) {
        console.log(e)
      }
    } else {
      console.log('NO HAY UN USUARIO LOGEADO');
    }
  }

  useEffect(() => {
    pedirUsuario();
  }, []);

  async function login(username, password) {
    const { data } = await Axios.post('/usuarios/login', {
      username,
      password
    });
    console.log(data)
    setUsuario(data.usuario);
    setToken(data.token);
  }

  async function signup(usuario) {
    try {
      const { data } = await Axios.post('/usuarios', usuario);
      setUsuario(data.usuario);
      setToken(data.token);
      console.log(data)
      // window.location.href = '/productos';

    } catch (e) {
      console.log(e)
    }
  }

  function mostrarError(error) {
    console.log(error)
  }

  return (
    <Router >
      <Container>
        {
          usuario ?
          <LoginRoutes usuario={usuario} /> :
          <LogoutRoutes login={login} signup={signup} mostrarError={mostrarError}/>
        }
      </Container>
    </Router>
  );
}


function LoginRoutes({ usuario, pedirUsuario, logout, mostrarError }) {
  return (
    <Switch>
      <Route
        path='/generate'
        render={(props) => (
          <ViewSearch {...props} mostrarError={mostrarError} usuario={usuario} />
        )}
      />
      <Route
        default
        path='/'
        render={(props) => (
          <ViewQuestions {...props} logout={logout} />
        )}
      />
    </Switch>
  )
}

function LogoutRoutes({ login, signup, mostrarError }) {
  return (
    <Switch>
      <Route
        path='/login'
        render={(props) => (
          <ViewLogin {...props} login={login} mostrarError={mostrarError} />
        )}
      />
      <Route
        render={(props) => (
          <ViewSignUp {...props} signup={signup} mostrarError={mostrarError} />
        )}
        default
      />
    </Switch>
  )
}
export default App;
