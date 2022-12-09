import styled from "styled-components";

export const CardsContainer = styled.div`
  height: 350px;
  width: 250px;
  display: flex;
  border: 2px solid #1a1a1a;
  border-radius: 5%;
  overflow: hidden;
  gap: 10px;
  
  button{
    border: none;
    font-size: 30px;
    color: #1a1a1a;
    background-color: transparent;
    padding-top: 15px;

    :hover{
            cursor: pointer;
            color: black;
        }
        :active{
            filter: brightness(0.70);
        }
  }

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