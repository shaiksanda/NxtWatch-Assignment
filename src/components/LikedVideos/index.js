import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BiLike} from 'react-icons/bi'
import Sidebar from '../Sidebar'
import NxtContext from '../../context/NxtContext'
import Header from '../Header'

import {
  TopIconContainer,
  NormalHeading,
  HomeBgContainer,
  HomeContainer,
  DataContainer,
  StyledHeading,
  StyledDescription,
  StyledContainer,
  SavedImage,
  NotFoundImage,
} from './styledComponents'

const LikedVideos = () => {
  console.log()
  return (
    <NxtContext.Consumer>
      {value => {
        const {likedVideos, darkTheme} = value

        const getTimeDistance = publishedAt => {
          const publishedDate = new Date(publishedAt)
          const distance = formatDistanceToNow(publishedDate, {addSuffix: true})
          return distance.replace(/about |almost |over |some /g, '')
        }

        return (
          <HomeBgContainer darkTheme={darkTheme}>
            <HomeContainer darkTheme={darkTheme}>
              <Header />
              <Sidebar />
              <DataContainer darkTheme={darkTheme}>
                <TopIconContainer darkTheme={darkTheme}>
                  <BiLike size={30} color="red" />
                  <NormalHeading darkTheme={darkTheme}>
                    Liked Videos
                  </NormalHeading>
                </TopIconContainer>
                {likedVideos.length === 0 ? (
                  <StyledContainer darkTheme={darkTheme}>
                    <NotFoundImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no liked videos"
                    />
                    <StyledHeading darkTheme={darkTheme}>
                      No Liked Videos Found
                    </StyledHeading>
                    <StyledDescription darkTheme={darkTheme}>
                      You can Like your videos while watching them.
                    </StyledDescription>
                  </StyledContainer>
                ) : (
                  likedVideos.map(each => (
                    <Link
                      to={`/videos/${each.id}`}
                      className="nav-item-link"
                      key={each.id}
                    >
                      <div
                        style={{display: 'flex', gap: '10px', margin: '10px'}}
                      >
                        <SavedImage src={each.thumbnailUrl} alt="thumbnail" />
                        <div>
                          <StyledHeading darkTheme={darkTheme}>
                            {each.title}
                          </StyledHeading>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <StyledDescription darkTheme={darkTheme}>
                              {each.channel.name}
                            </StyledDescription>
                            <StyledDescription darkTheme={darkTheme}>
                              {each.viewCount} Views
                            </StyledDescription>
                            <StyledDescription darkTheme={darkTheme}>
                              {getTimeDistance(each.publishedAt)}
                            </StyledDescription>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </DataContainer>
            </HomeContainer>
          </HomeBgContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default LikedVideos
