import styled, { css } from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    border-top: 2px solid rgb(210, 210, 210);
    border-bottom: 2px solid rgb(210, 210, 210);
    height: 60px;
    align-items: center;
    top: 0px;
    left: 0px;
    font-weight: 700;
    font-size: 15px;
`

const NavElement = styled.div`
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    ${(props) =>
        props.selected &&
        css`
            text-decoration: underline;
        `}
`

function Navigation() {
    return (
        <Nav>
            <NavElement selected>Главная</NavElement>
            <NavElement>Категории</NavElement>
            <NavElement>Авторы</NavElement>
            <NavElement>Обсуждение</NavElement>
            <NavElement>Популярное</NavElement>
        </Nav>
    )
}

export default Navigation