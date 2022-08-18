import styled, { css } from "styled-components";
import { LIGHT_PINK_COLOR, MIDDLE_PINK_COLOR, DARK_PINK_COLOR, RED_BORDER_COLOR, THIN_PINK_COLOR } from "./variables";

// REUSABLE CSS FRAGMENTS
const SheduleBlocksStyles = css`
    padding: 2px; 
    font-size: 12px;
`

// STYLED COMPONENTS
export const ScheduleLessonItem = styled.div`
    display: flex;
    margin: 1px 0;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${RED_BORDER_COLOR};
`
export const LessonNumber = styled.div`
    ${SheduleBlocksStyles};
    
`
export const Lesson = styled.div`
    ${SheduleBlocksStyles};
    
`
export const Teacher = styled.div`
    ${SheduleBlocksStyles};
    
`
export const Room = styled.div`
    ${SheduleBlocksStyles};
    
`