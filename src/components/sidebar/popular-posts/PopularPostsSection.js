import styled from "styled-components";
import PopularPostsItem from "./PopularPostsItem";
import post1 from "./posts/post1.jpeg"
import post2 from "./posts/post2.jpeg"
import post3 from "./posts/post3.jpeg"

const PopularPosts = styled.div`
    border-bottom: 2px solid rgb(210, 210, 210);
`

const PopularPostsHead = styled.div`
    height: 60px;
    align-items: center;
    display: flex;
`

const SideBarTitle = styled.div`
    font-weight: 700;
    font-size: 15px;
    margin-left: 20px;
`
const PopularPostsList = styled.div`
    margin-left: 20px;
`

function PopularPostsSection() {
    return (
        <PopularPosts>
            <PopularPostsHead>
                <SideBarTitle>ПОПУЛЯРНЫЕ ПОСТЫ</SideBarTitle>
            </PopularPostsHead>
            <PopularPostsList>
                <PopularPostsItem imgSrc={post1} categories="Новинки" name="Состоялся релиз ПК-версии God of War Ragnarok"/>
                <PopularPostsItem imgSrc={post2} categories="Хиты" name="Space Marine 2 показала одни из лучших стартовых продаж в Европе"/>
                <PopularPostsItem imgSrc={post3} categories="Провалы" name="Ремастер Star Wars: Battlefront был ужасен, поэтому фанаты сделали свой собственный"/>
            </PopularPostsList>
        </PopularPosts>
    )
}

export default PopularPostsSection