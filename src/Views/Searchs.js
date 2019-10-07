import React from 'react';
import Search from '../Components/SearchExam';
import { Steps, Icon, Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const { Step } = Steps;

const ViewSearch = () => {

  return(
    <div style={{textAlign: 'center'}}>
      <img style={{
        margin: '0 auto',
        width: '23%',}}
        src="https://cdn1.iconfinder.com/data/icons/internet-and-security-glyph-1/64/internet-and-security-glyph-1-10-512.png" alt=""/>
      <Search />
    </div>
  );
}

export default ViewSearch;
