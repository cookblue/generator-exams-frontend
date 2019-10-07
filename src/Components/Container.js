import React, { useState } from 'react';
import SignUp from '../Components/SignUp';
import { Steps, Icon, Layout, Card } from 'antd';
const { Header, Content, Footer } = Layout
const { Step } = Steps;


const Container = ({ children }) => {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: '#ff4d4f', verticalAlign: 'middle' }}>
          <h1 style={{ color: 'white' }}>Generador de Examenes</h1>
        </Header>
        <Content style={{ height: '100vh', padding: '0 50px', backgroundColor: '#1890ff' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Container;
