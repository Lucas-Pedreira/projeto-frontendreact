import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;

    a{
        font-size: 35px;
        text-align: center;
        padding-bottom: 30px;

        :hover{
            cursor: pointer;
        }
    }

    button{
        border: none;
        font-size: 35px;
        background-color: transparent;
        :hover{
            cursor: pointer;
            filter: brightness(0.90);
        }
        :active{
            filter: brightness(0.70);
        }
    }
`