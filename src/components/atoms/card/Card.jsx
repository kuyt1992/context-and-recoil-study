import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #f6f5f5;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 4px;
  padding: 16px;
`;
