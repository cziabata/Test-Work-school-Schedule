import styled, { css } from "styled-components";
import { FlexCenteredContainer } from "./common";
import { RED_BORDER_COLOR, GREEN_BORDER_COLOR, YELLOW_BORDER_COLOR, 
         SMALL_CELL_HEIGHT, LARGE_CELL_HEIGHT, 
       } from "./variables";

// REUSABLE CSS FRAGMENTS

const CommonClassCellStyles = css`
    ${FlexCenteredContainer}
    height: ${SMALL_CELL_HEIGHT};
    border: 2px solid ${RED_BORDER_COLOR};
    border-radius: 3px;
    grid-row: 1 / 1;
`
const CommonDayCellStyles = css`
    ${FlexCenteredContainer};
    height: ${LARGE_CELL_HEIGHT};
    border: 2px solid ${GREEN_BORDER_COLOR};
    border-radius: 3px;
    grid-column: 1 / 1;
`
const CommonScheduleCellStyles = css`
    height: ${LARGE_CELL_HEIGHT};
    border: 2px solid ${YELLOW_BORDER_COLOR};
    border-radius: 3px;
    padding: 2px 1px;
`

const MondayRow = css`
    grid-row: 1 / 2;
`
const TuesdayRow = css`
    grid-row: 2 / 3;
`
const WednesdayRow = css`
    grid-row: 3 / 4;
`
const ThursdayRow = css`
    grid-row: 4 / 5;
`
const FridayRow = css`
    grid-row: 5 / 6;
`

const FifthClassColumn = css`
    grid-column: 2 / 3;
`
const SixthClassColumn = css`
    grid-column: 3 / 4;
`
const SeventhClassColumn = css`
    grid-column: 4 / 5;
`
const EighthClassColumn = css`
    grid-column: 5 / 6;
`
const NinthClassColumn = css`
    grid-column: 6 / 7;
`
const TenthClassColumn = css`
    grid-column: 7 / 8;
`
const EleventhClassColumn = css`
    grid-column: 8 / 9;
`


// COMMON STYLED COMPONENTS
export const TableLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 45px 1fr;
    gap: 1px;
`
export const InfoCell = styled.div`
    ${CommonClassCellStyles};
    height: 45px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border: none;
    font-size: 24px;
`

// CLASS STYLED COMPONENTS
export const FifthClassCell = styled.div`
    ${CommonClassCellStyles};
    ${FifthClassColumn};
`
export const SixthClassCell = styled.div`
    ${CommonClassCellStyles};
    ${SixthClassColumn};
`
export const SeventhClassCell = styled.div`
    ${CommonClassCellStyles};
    ${SeventhClassColumn};
`
export const EighthClassCell = styled.div`
    ${CommonClassCellStyles};
    ${EighthClassColumn};
`
export const NinthClassCell = styled.div`
    ${CommonClassCellStyles};
    ${NinthClassColumn};
`
export const TenthClassCell = styled.div`
    ${CommonClassCellStyles};
    ${TenthClassColumn};
`
export const EleventhClassCell = styled.div`
    ${CommonClassCellStyles};
    ${EleventhClassColumn};
`

// DAYS STYLED COMPONENTS
export const DaysGridContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr;
    gap: 1px;
`
export const MondayCell = styled.div`
    ${CommonDayCellStyles}
    ${MondayRow};
`
export const TuesdayCell = styled.div`
    ${CommonDayCellStyles}
    ${TuesdayRow};
`
export const WednesdayCell = styled.div`
    ${CommonDayCellStyles}
    ${WednesdayRow};
`
export const ThursdayCell = styled.div`
    ${CommonDayCellStyles}
    ${ThursdayRow};
`
export const FridayCell = styled.div`
    ${CommonDayCellStyles}
    ${FridayRow};
`

// FIFTH CLASS SCHEDULE
export const FifthClassWeeklySchedule = styled.div`
    ${FifthClassColumn};
    /* grid-template-columns: 1fr;
    display: grid;
    gap: 1px; */
`
export const FifthClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${FifthClassColumn};
`
export const FifthClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${FifthClassColumn};
`
export const FifthClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${FifthClassColumn};
`
export const FifthClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${FifthClassColumn};
`
export const FifthClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${FifthClassColumn};
`

// SIXTH CLASS SCHEDULE
export const SixthClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${SixthClassColumn};
`
export const SixthClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${SixthClassColumn};
`
export const SixthClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${SixthClassColumn};
`
export const SixthClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${SixthClassColumn};
`
export const SixthClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${SixthClassColumn};
`

// SEVENTH CLASS SCHEDULE
export const SeventhClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${SeventhClassColumn};
`
export const SeventhClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${SeventhClassColumn};
`
export const SeventhClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${SeventhClassColumn};
`
export const SeventhClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${SeventhClassColumn};
`
export const SeventhClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${SeventhClassColumn};
`

// EIGHTH CLASS CHEDULE
export const EighthClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${EighthClassColumn};
`
export const EighthClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${EighthClassColumn};
`
export const EighthClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${EighthClassColumn};
`
export const EighthClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${EighthClassColumn};
`
export const EighthClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${EighthClassColumn};
`

// NINTH CLASS SCHEDULE
export const NinthClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${NinthClassColumn};
`
export const NinthClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${NinthClassColumn};
`
export const NinthClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${NinthClassColumn};
`
export const NinthClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${NinthClassColumn};
`
export const NinthClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${NinthClassColumn};
`

// TENTH CLASS SCHEDULE
export const TenthClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${TenthClassColumn};
`
export const TenthClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${TenthClassColumn};
`
export const TenthClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${TenthClassColumn};
`
export const TenthClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${TenthClassColumn};
`
export const TenthClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${TenthClassColumn};
`

// ELEVENTH CLASS SCHEDULE
export const EleventhClassMondaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${MondayRow};
    ${EleventhClassColumn};
`
export const EleventhClassTuesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${TuesdayRow};
    ${EleventhClassColumn};
`
export const EleventhClassWednesdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${WednesdayRow};
    ${EleventhClassColumn};
`
export const EleventhClassThursdaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${ThursdayRow};
    ${EleventhClassColumn};
`
export const EleventhClassFridaySchedule = styled.div`
    ${CommonScheduleCellStyles};
    ${FridayRow};
    ${EleventhClassColumn};
`
