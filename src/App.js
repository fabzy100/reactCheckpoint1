import React from 'react';
import "./App.css";
import styled from "styled-components";
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';

// Provide your first name here
const firstName = 'ibrahim'; // Example: 'John'

function App() {
  const Container = styled.div`
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  
    .cardStyle = {
    width: '18rem',
    margin: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  };

  .textStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };
`;
const GreetingImage = styled.img`
  background-color: red;
  width: 400px;
  height: 400px;
  margin-top: 10px;
`;


  return (
    <Container>
      <div className='cardStyle'>
        <Image />
        <h2><Name /></h2>
        <p><Price /></p>
        <p><Description /></p>
      </div>

      <div className='textStyle'>
        <p>Hello, {firstName ? firstName : 'there'}!</p>
        {firstName && (
          <GreetingImage 
            src="https://i8.amplience.net/i/naras/wizkid_MI0005473154-MN0003081520"
            alt="Greeting"
          />
        )}
      </div>
    </Container>
  );
}

export default App;