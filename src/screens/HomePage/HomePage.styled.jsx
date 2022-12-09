import styled from "styled-components";

export const Main = styled.div`
    section{
        display: flex;
        flex-wrap: wrap;
   
    h1, hr{
        width: 100%;
    }
    
    }

    .title{
    padding-left: 100px;
    }

    .products-cards{
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .filter-order{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        padding-top: 20px;
    }

    footer{
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        a{
            color: #1a1a1a;
            font-size: 25px;
        }
    }
`