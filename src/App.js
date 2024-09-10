import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = ''; // Change this to your name or leave it empty

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <Image imageUrl={product.image} />
          <Card.Title><Name name={product.name} /></Card.Title>
          <Card.Text><Description description={product.description} /></Card.Text>
          <Price price={product.price} />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <h2>
        {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
      </h2>
      {firstName && <img src={product.image} alt="Product" style={{ width: '100px', marginTop: '20px' }} />}
    </div>
  );
}

export default App;
