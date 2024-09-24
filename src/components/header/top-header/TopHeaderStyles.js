import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    position: relative;
`

export const TopHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
`

export const TopHeaderButton = styled.button`
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    background: none;
    margin: 0 5px;
`

export const TopHeaderButtonImg = styled.img`
    width: 100%;
    transform: scale(1.2)
`

export const Logo = styled.div`
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    letter-spacing: 0.4em;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        text-decoration:underline;
    }
`

export const ProfileText = styled.div`
    font-size: 14px;
    margin-right: 5px;
`


