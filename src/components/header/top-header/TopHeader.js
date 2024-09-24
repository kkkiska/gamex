import bellImg from './images/bell.png';
import searchImg from './images/search.png';
import profileImg from './images/user.png';
import {
    Container,
    TopHeaderWrapper,
    TopHeaderButton,
    TopHeaderButtonImg,
    Logo,
    Profile,
    ProfileText
} from './TopHeaderStyles';

const TopHeaderButtonComponent = ({ title = '', imgSrc, alt }) => (
    <TopHeaderButton title={title}>
        <TopHeaderButtonImg src={imgSrc} alt={alt} />
    </TopHeaderButton>
);

function TopHeader() {
    return (
        <Container>
            <TopHeaderWrapper>
                <div>
                    <TopHeaderButtonComponent title="Уведомления" imgSrc={bellImg} alt="Уведомления" />
                    <TopHeaderButtonComponent title="Поиск" imgSrc={searchImg} alt="Поиск" />
                </div>
                <Logo>GAMEX</Logo>
                <Profile>
                    <ProfileText>Профиль</ProfileText>
                    <TopHeaderButtonComponent imgSrc={profileImg} alt="Изображение пользователя" />
                </Profile>
            </TopHeaderWrapper>
        </Container>)
}

export default TopHeader;