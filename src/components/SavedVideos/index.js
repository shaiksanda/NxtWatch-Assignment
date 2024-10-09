import {formatDistanceToNow} from 'date-fns' // Import this if not already done
import {Link} from 'react-router-dom'
import {RiVideoUploadLine} from 'react-icons/ri'
import Sidebar from '../Sidebar'
import Header from '../Header'
import NxtContext from '../../context/NxtContext'

import {
  TopIconContainer,
  NormalHeading,
  HomeBgContainer,
  HomeContainer,
  DataContainer,
  StyledContainer,
  StyledHeading,
  StyledDescription,
  NotFoundImage,
  SavedImage,
} from './styledComponents' // Import your styled components

const SavedVideos = () => {
  console.log('')
  return (
    <NxtContext.Consumer>
      {value => {
        const {savedVideos, darkTheme} = value

        const getTimeDistance = publishedAt => {
          const publishedDate = new Date(publishedAt)
          const distance = formatDistanceToNow(publishedDate, {addSuffix: true})
          return distance.replace(/about |almost |over |some /g, '') // Remove specified words
        }

        return (
          <HomeBgContainer darkTheme={darkTheme}>
            <HomeContainer darkTheme={darkTheme}>
              <Header />
              <Sidebar />
              <DataContainer darkTheme={darkTheme} data-testid="savedVideos">
                <TopIconContainer darkTheme={darkTheme}>
                  <RiVideoUploadLine size={30} color="red" />
                  <NormalHeading darkTheme={darkTheme}>
                    Saved Videos
                  </NormalHeading>
                </TopIconContainer>
                {savedVideos.length === 0 ? (
                  <StyledContainer darkTheme={darkTheme}>
                    <NotFoundImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NormalHeading darkTheme={darkTheme}>
                      No saved videos found
                    </NormalHeading>
                    <StyledDescription darkTheme={darkTheme}>
                      You can save your videos while watching them.
                    </StyledDescription>
                  </StyledContainer>
                ) : (
                  savedVideos.map(each => (
                    <Link
                      to={`/videos/${each.id}`}
                      className="nav-item-link"
                      key={each.id}
                    >
                      <div key={each.id}>
                        <div
                          style={{display: 'flex', gap: '10px', margin: '10px'}}
                        >
                          <div>
                            <SavedImage
                              src={each.thumbnailUrl}
                              alt="thumbnail"
                            />
                          </div>
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

export default SavedVideos
