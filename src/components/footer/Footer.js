import { SocialContainer } from "../sidebar/media/MediaSection";
import styled from "styled-components";

const FooterContainer = styled.footer`
    height: 400px;
    border-top: 2px solid rgb(210, 210, 210);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FooterInformation = styled.div`
    font-size: 14px;
    letter-spacing: .1em;
`

const FooterLink = styled.a`
    text-decoration: none;
    color: black;
`

const SubscribeForm = styled.form`
    margin-top: 30px;  
`

const SubscribeInput = styled.input`
    width: 300px;
    height: 60px;
    text-align: center;
    font-size: 16px;
`

const SubscribeSubmit = styled.button`
    height: 60px;
    width: 160px;
    border: none;
    background-color: black;
    color: white;
    font-size: 12px;
    margin-left: 15px;
    cursor: pointer;
    letter-spacing: .1em;
    text-transform: uppercase;
`

function Footer() {
    return(
        <FooterContainer>
            <FooterInformation>
                <FooterLink>Наши партнеры</FooterLink>
                <span> | </span>
                <FooterLink>Юридическая информация</FooterLink>
            </FooterInformation>
            <FooterInformation style={{marginTop: '40px'}}>Подписаться на новостную рассылку</FooterInformation>
            <SubscribeForm action="" method="POST" style={{marginBottom: '40px'}}>
                <SubscribeInput placeholder="Ваш адрес электронной почты" type="email"/>
                <SubscribeSubmit type="submit">Подписаться</SubscribeSubmit>
            </SubscribeForm>
            <SocialContainer/>
        </FooterContainer>
    )
}

export default Footer