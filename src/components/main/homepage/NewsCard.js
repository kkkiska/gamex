import { 
    NewsCardItem,
    NewsCardItemImg,
    NewsCardItemAuthor,
    NewsCardAuthorName,
    NewsCardBottomInformation,
    BottomInformationText,
    NewsCardStatistics } from './NewsCardStyles'
import NewsCardItemImgSrc from './news-posters/postimg1.jpg'
import NewsCardItemLikes from '../../../imgs/heart.png'
import NewsCardItemComments from '../../../imgs/chat.png'
import NewsCardItemAuthorImg from '../../header/top-header/images/user.png'

function NewsCard({author, newsTitle, newsDate, newsLikes, newsComments}) {
    return (
        <NewsCardItem title="Нажмите чтобы прочитать подробнее">
            <NewsCardItemImg src={NewsCardItemImgSrc} alt="Изображение новости"/>
            <NewsCardItemAuthor>
                <img src={NewsCardItemAuthorImg} alt="Изображение пользователя"/>
                <NewsCardAuthorName>{author}</NewsCardAuthorName>
            </NewsCardItemAuthor>
            <h3>{newsTitle}</h3>
            <NewsCardBottomInformation>
                <BottomInformationText>{newsDate}</BottomInformationText>
                <NewsCardStatistics>
                    <BottomInformationText>{newsLikes}</BottomInformationText>
                    <img src={NewsCardItemLikes} alt="лайки"/>
                    <BottomInformationText>{newsComments}</BottomInformationText>
                    <img src={NewsCardItemComments} alt="комментарии"/>
                </NewsCardStatistics>
            </NewsCardBottomInformation>
        </NewsCardItem>
    )
}

export default NewsCard;