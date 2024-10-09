import {useState, useEffect, useCallback, useContext} from 'react'

import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {TiDelete} from 'react-icons/ti'
import {FaDotCircle} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import FailureView from '../FailureView'
import Sidebar from '../Sidebar'
import NxtContext from '../../context/NxtContext'
import {
  HomeBgContainer,
  HomeContainer,
  Container,
  DataContainer,
  ApiDataContainer,
  TitleHeading,
  ChannelName,
  PublishedContainer,
  SearchResultsHeading,
  SearchResultsContent,
  LoaderContainer,
  CrossContainer,
  GetItNowButton,
  SearchContainer,
  InputSearch,
  VideoThumbnail,
  Data,
  ProfileLogo,
  ChannelDetailsContainer,
  ViewsCount,
  EachVideoContainer,
  SearchButton,
  NoSearchResultsContainer,
  NoVideos,
  RetryButton,
  FailureBgContainer,
  Logo,
} from './styledComponents'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFailure, setIsFailure] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [showCrossContainer, setShowCrossContainer] = useState(true)
  const [finalSearchInput, setFinalSearchInput] = useState('') // For API call when button is clicked
  const {darkTheme} = useContext(NxtContext)

  const handleDeleteClick = () => {
    setShowCrossContainer(false) // This will hide the cross-container
  }

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos?search=${finalSearchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(url, options)
      const responseData = await response.json()
      if (response.ok) {
        const updatedData = responseData.videos.map(each => ({
          channel: each.channel,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))
        setData(updatedData)
      } else {
        console.error('Error fetching data:', responseData.error_msg)
        setIsFailure(true)
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setIsFailure(true)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [finalSearchInput]) // Dependencies go here

  useEffect(() => {
    fetchData()
  }, [finalSearchInput, fetchData]) // Trigger fetch when finalSearchInput changes (i.e., when button is clicked)

  const handleSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const handleSearchClick = () => {
    setFinalSearchInput(searchInput) // Triggers the API call via useEffect
  }

  const renderSuccesView = () => (
    <DataContainer darkTheme={darkTheme}>
      {showCrossContainer && (
        <Container darkTheme={darkTheme}>
          <CrossContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <TiDelete
              size={40}
              style={{cursor: 'pointer'}}
              onClick={handleDeleteClick}
            />
          </CrossContainer>
          <h1>
            Buy Nxt watch Premium prepaid <br /> plans with UPI
          </h1>
          <GetItNowButton type="button">Get It Now</GetItNowButton>
        </Container>
      )}
      <ApiDataContainer darkTheme={darkTheme}>
        <SearchContainer>
          <InputSearch
            value={searchInput}
            onChange={handleSearchInput}
            type="search"
            placeholder="Search..."
          />
          <SearchButton type="button" onClick={handleSearchClick}>
            <BsSearch size={20} style={{cursor: 'pointer'}} />
          </SearchButton>
        </SearchContainer>
        {data.length === 0 ? (
          <NoSearchResultsContainer>
            <NoVideos
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <SearchResultsHeading darkTheme={darkTheme}>
              No Search results found
            </SearchResultsHeading>
            <SearchResultsContent darkTheme={darkTheme}>
              Try different keywords or remove search filter
            </SearchResultsContent>
            <RetryButton onClick={fetchData} type="button">
              Retry
            </RetryButton>
          </NoSearchResultsContainer>
        ) : (
          <Data>
            {data.map(each => {
              const distance = formatDistanceToNow(new Date(each.publishedAt), {
                addSuffix: true,
              })
              return (
                <Link
                  className="nav-item-link"
                  key={each.id}
                  to={`videos/${each.id}`}
                >
                  <EachVideoContainer>
                    <VideoThumbnail
                      src={each.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <ChannelDetailsContainer>
                      <ProfileLogo
                        src={each.channel.profile_image_url}
                        alt="profile logo"
                      />
                      <div>
                        <TitleHeading darkTheme={darkTheme}>
                          {each.title}
                        </TitleHeading>
                        <ChannelName darkTheme={darkTheme}>
                          {each.channel.name}
                        </ChannelName>
                        <PublishedContainer darkTheme={darkTheme}>
                          <ViewsCount>{each.viewCount} views</ViewsCount>
                          <FaDotCircle />
                          <ViewsCount>
                            {distance.replace(
                              /about |almost |over |some /g,
                              '',
                            )}
                          </ViewsCount>
                        </PublishedContainer>
                      </div>
                    </ChannelDetailsContainer>
                  </EachVideoContainer>
                </Link>
              )
            })}
          </Data>
        )}
      </ApiDataContainer>
    </DataContainer>
  )

  const renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="BallTriangle"
        size={50}
        color="green"
        height="80"
        width="80"
      />
    </LoaderContainer>
  )

  const renderFailureView = () => (
    <FailureBgContainer>
      <FailureView />
    </FailureBgContainer>
  )

  const renderContent = () => {
    switch (true) {
      case isLoading:
        return renderLoaderView()
      case isFailure:
        return renderFailureView()
      default:
        return renderSuccesView()
    }
  }

  return (
    <HomeBgContainer darkTheme={darkTheme}>
      <HomeContainer darkTheme={darkTheme}>
        <Header />
        <Sidebar />
        {renderContent()}
      </HomeContainer>
    </HomeBgContainer>
  )
}

export default Home
