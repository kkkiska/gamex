import styled from "styled-components";

export const NewsCardItem = styled.div`
    box-sizing: border-box;
    padding: 10px;
    margin: 6px;
    cursor: pointer;
`

export const NewsCardItemImg = styled.img`
    width: 100%;
`

export const NewsCardItemAuthor = styled.div`
    display: flex;
    & img {
        width: 15px;
        height: 15px;
    }
`

export const NewsCardAuthorName = styled.div`
    margin-left: 7px;
    font-size: 13px;
`

export const NewsCardBottomInformation = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
`

export const BottomInformationText = styled.span`
    font-size: 12px;
    margin: 0 3px;
`

export const NewsCardStatistics = styled.div`
    & img {
        width: 12px;
        height: 12px;
    }
`