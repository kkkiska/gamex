import styled from "styled-components"
import vk from "./icons/vk.png"
import telegram from "./icons/telegram.png"
import insta from "./icons/instagram.png"

const MediaSectionWrapper = styled.div`
    height: 80px;
    border-bottom: 2px solid rgb(210, 210, 210);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SidebarTitle = styled.div`
    font-weight: 700;
    font-size: 15px;
    margin-left: 20px;
`

const SocialLink = styled.a`
    text-decoration: none;
    margin: 0 3px;
    & img {
        width: 30px; 
    }
`

const Social = ({href, title, imgSrc, alt}) => {
    return (
        <SocialLink href={href} title={title}>
            <img src={imgSrc} alt={alt}/>
        </SocialLink>
    )
}

export const SocialContainer = () => {
    return (
        <div>
            <Social href="https://www.instagram.com" title="Instagram" imgSrc={insta} alt="Инстаграм" />
            <Social href="https://www.telegram.org" title="Telegram" imgSrc={telegram} alt="Телеграм" />
            <Social href="https://vk.com" title="ВКонтакте" imgSrc={vk} alt="ВКонтакте" />
        </div>
    )
}

function MediaSection() {
    return (  
        <MediaSectionWrapper>
            <SidebarTitle>МЕДИА</SidebarTitle>
            <SocialContainer/>
        </MediaSectionWrapper>
    )
}

export default MediaSection