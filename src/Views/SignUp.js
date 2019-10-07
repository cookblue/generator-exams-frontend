import React, {useState} from 'react';
import SignUp from '../Components/SignUp';
import { Card } from 'antd';


const ViewSignup = ({ history, signup, mostrarError}) => {
  return(
    <div>
      <div style={{ height: '84vh', padding: '0 50px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <Card title="Registro" style={{ width: 300, height: 280 }}>
            <SignUp signup={signup} history={history} mostrarError={mostrarError} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ViewSignup;
