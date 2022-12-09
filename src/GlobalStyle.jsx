import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    html{   
        font-family: 'Roboto', sans-serif; ;
    }

   #root{
    display: flex;
    flex-direction: column;
    color: #1a1a1a;
   }
`