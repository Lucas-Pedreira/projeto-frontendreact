import styled from "styled-components";

export const CardsContainer = styled.div`
  height: 320px;
  width: 250px;
  display: flex;
  border: 1px solid black;
  border-radius: 5%;
  overflow: hidden;

  

  .name-year{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .price-button{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`