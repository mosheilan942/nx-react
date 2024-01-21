import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
// import NxWelcome from './nx-welcome';
import HelloWorld from './hello-world/hello-world';

// importing the component from the library
import { ProductList } from '@myreactapp/products';
import { OrderList } from '@myreactapp/orders';

const StyledApp = styled.div`
  // Your style here
`;

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<HelloWorld />}></Route>
        <Route path="/products/*" element={<ProductList />}></Route>
        <Route path="/orders" element={<OrderList />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
