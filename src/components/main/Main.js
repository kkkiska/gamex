import { Container } from "../header/top-header/TopHeaderStyles";
import SideBar from "../sidebar/SideBar";
import NewsSection from "./homepage/Homepage";
import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    width: 100%;
`

function Main() {
    return(
        <Container>
            <MainContent>
                <NewsSection/>
                <SideBar/>
            </MainContent>
        </Container>
    )
}

export default Main;