import React from "react";
import styled from "styled-components";

const Titles = () => {
  return (
    <Container>
      <Title>
        <h1>POKEMON LIST</h1>
        <Line />
      </Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  padding-top: 70px;
  color: #ffffff;
  font-weight: 500;
`;

const Line = styled.hr`
  width: 242px;

  border-bottom: 5px solid #fff0f0;
`;

export default Titles;
