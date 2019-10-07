import React, {useState} from 'react';
import LoginUser from '../Components/Login';
import { Typography, Steps, Icon, Layout, Card } from 'antd';
const { Header, Content, Footer } = Layout
const { Step } = Steps;

const { Title } = Typography;

const ViewLogin = ({login, mostrarError, history}) => {
  return(
    <div>
      <div style={{ height: '84vh',padding: '0 50px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div>
          <Card title="Login"  style={{ width: 300,height: 280}}>
            <LoginUser login={login} mostrarError={mostrarError} history={history}/>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ViewLogin;
