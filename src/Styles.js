import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }`;

export const HeadTitle = styled.h1`
  text-align: center;
`;
export const SubTitle = styled.h4`
  text-align: center;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flexbox;
  flex-wrap: wrap;
`;
export const PizzaWrapper = styled.div`
  margin: 20px;
  border: 10px;
  border-style: solid;
  border-color: #e78529c7;
  img {
    width: 300px;
    height: 200px;
  }

  p {
    text-align: center;
    color: black;
  }
`;
