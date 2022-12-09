import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;

    h1{
        font-size: 35px;
        text-align: center;
        padding-bottom: 30px;
        background: linear-gradient(90deg,#00dbde, #4169e1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        :hover{
            cursor: pointer;
        }
    }

    button{
        border: none;
        font-size: 35px;
        background-color: transparent;
        color: #4169e1;
        :hover{
            cursor: pointer;
            filter: brightness(0.90);
        }
        :active{
            filter: brightness(0.70);
        }
    }
`