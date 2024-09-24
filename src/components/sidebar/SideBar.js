import MediaSection from "./media/MediaSection";
import PopularPostsSection from "./popular-posts/PopularPostsSection";
import styled from "styled-components";

const SideBarWrapper = styled.div`
    width: 25%;
    border-left: 2px solid rgb(210, 210, 210);
`


function SideBar() {
    return(
        <SideBarWrapper>
            <MediaSection/>
            <PopularPostsSection/>
        </SideBarWrapper>
    )
}

export default SideBar