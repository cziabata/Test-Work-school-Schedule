import styled from "styled-components";
import { FlexCenteredContainer } from "./common";
import { APP_WIDTH, APP_HEIGHT, APP_BACKGROUND_COLOR } from "./variables";

export const BaseAppFlexWrapper = styled.div`
    ${FlexCenteredContainer}
    background-color: ${APP_BACKGROUND_COLOR};
    padding: 5px;
`
export const BaseAppContainer = styled.div`
    width: ${APP_WIDTH};
    height: ${APP_HEIGHT};
`