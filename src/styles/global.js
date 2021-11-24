import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const Global = createGlobalStyle`
    @font-face { 
         font-family: 'OpenSans';  
         src:url('../assets/fonts/OpenSans/OpenSans-Medium.ttf'),        
        }
    * {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0;
    }
    h1 {
        color: ${theme.colors.darkBlue}
    }
    h2 {
        color: ${theme.colors.darkBlue}
    }
   body {
       font-family: "OpenSans", sans-serif;
   }
    `;
