import styled, { css, createGlobalStyle } from "styled-components";
import { APP_TEXT_COLOR } from "./variables";


// GLOBAL STYLES
export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto Slab', serif;
        font-weight: bold;
        color: ${APP_TEXT_COLOR}
    }
`;

// CSS REUSABLE FRAGMENTS
export const FlexCenteredContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

// COMMON UI COMPONENTS
export const AdditionalInfoContainer = styled.div`
    ${FlexCenteredContainer};
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-size: 36px;
`

