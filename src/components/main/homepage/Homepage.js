import NewsCard from "./NewsCard"
import styled from "styled-components"

const NewsColumn = styled.div`
    width: 30%;
    flex-direction: column;
`

const NewsSectionContainer = styled.section`
    width: 75%;
    display: flex;
`

// В планах сделать массив объектов который будет мапиться в компоненты NewsCard динамически отрисовывая карточки


function NewsSection() { 
    return (
        <NewsSectionContainer>
            <NewsColumn>
                <NewsCard 
                    author="zzotex" 
                    newsTitle="Экс-журналист IGN: На разработку Concord потратили 400 млн долларов"
                    newsDate="20.09.2024"
                    newsLikes="34"
                    newsComments="7"
                /> 
            </NewsColumn>
            <NewsColumn>
                <NewsCard 
                    author="zzotex" 
                    newsTitle="Экс-журналист IGN: На разработку Concord потратили 400 млн долларов"
                    newsDate="20.09.2024"
                    newsLikes="34"
                    newsComments="7"
                /> 
            </NewsColumn>
            <NewsColumn>
                <NewsCard 
                    author="zzotex" 
                    newsTitle="Экс-журналист IGN: На разработку Concord потратили 400 млн долларов"
                    newsDate="20.09.2024"
                    newsLikes="34"
                    newsComments="7"
                /> 
            </NewsColumn>
        </NewsSectionContainer>
    )
}

export default NewsSection