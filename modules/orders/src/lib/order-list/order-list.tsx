import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OrderListProps {}

const StyledOrderList = styled.div`
  color: pink;
`;

export function OrderList(props: OrderListProps) {
  return (
    <StyledOrderList>
      <h1>Welcome to OrderList!</h1>
    </StyledOrderList>
  );
}

export default OrderList;
