import styled from "styled-components"

const PopularPostsItemContainer = styled.div`
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    cursor: pointer;

    & img {
        height: 100%;
        margin-right: 10px;
    }
`

const PopularPostsItemInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PopularPostsItemCategories = styled.div`
    color: rgba(0, 0, 0, 0.3);
`

const PopularPostsItemTitle = styled.div`
    line-height: 17px;
    font-weight: 700;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4; 
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    overflow: hidden;
`

function PopularPostsItem({imgSrc, categories, name}) {
    return (
        <PopularPostsItemContainer>
            <img src={imgSrc}/>
            <PopularPostsItemInformation>
                <PopularPostsItemCategories>{categories}</PopularPostsItemCategories>
                <PopularPostsItemTitle>{name}</PopularPostsItemTitle>
            </PopularPostsItemInformation>
        </PopularPostsItemContainer>
    )
}

export default PopularPostsItem