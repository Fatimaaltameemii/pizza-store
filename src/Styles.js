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
  background-color: white;
  img {
    width: 300px;
    height: 200px;
  }

  p {
    text-align: center;
    color: black;
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
