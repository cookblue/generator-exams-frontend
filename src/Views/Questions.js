import React from 'react';
import Pregunta from '../Components/Question';
import { Steps, Icon, Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const { Step } = Steps;

const ViewQuestions = (props) => {

  return(
    <div>
      <h1>Bienvenido:</h1>
      <p>Para poder usar la aplicacion, primero tendras que ingresar 1 pregunta:</p>
      <Pregunta {...props} />
    </div>
  );
}

export default ViewQuestions;
