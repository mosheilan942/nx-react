import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { Ui } from '@myreactapp/ui';

/* eslint-disable-next-line */
export interface ProductListProps {}

const StyledProductList = styled.div`
  color: pink;
`;

export function ProductList(props: ProductListProps) {
  return (
    <StyledProductList>
      <h1>Welcome to ProductList!</h1>
      <Routes>
        <Route path="/ui" element={<Ui />}></Route>
      </Routes>
    </StyledProductList>
  );
}

export default ProductList;
