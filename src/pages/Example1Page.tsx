import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e76a8;
  color: white;
  font-size: 32px;
`;

export const Example1Page = () => (
  <Wrapper>
    <h1 data-cy="page-heading">My Awesome Web Application</h1>
  </Wrapper>
);
