import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FailureView from '../FailureView'
import Sidebar from '../Sidebar'
import {
  HomeBgContainer,
  HomeContainer,
  DataContainer,
  ChannelName,
  TopIconContainer,
  NormalHeading,
  StyledHeading,
  GamingImage,
  GamingDataContainer,
  GamingItem,
  LoaderContainer,
} from './styledComponents' // Ensure the correct path
import NxtContext from '../../context/NxtContext'

const Gaming = () => {
  const [gamingData, setGamingData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFailure, setIsFailure] = useState(false)

  const {darkTheme} = useContext(NxtContext)

  const fetchVideoData = async () => {
    setIsLoading(true)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming' // Ensure this URL is incorrect for testing
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const responseData = await response.json()
      const updatedData = responseData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      if (response.ok) {
        setGamingData(updatedData)
        setIsLoading(false)
      } else {
        console.error('Error fetching video data:', responseData) // Log the error response
        setIsFailure(true)
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Fetch error:', error) // Log any network errors
      setIsFailure(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchVideoData()
  }, [])

  const renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="BallTriangle" color="green" height="80" width="80" />
    </LoaderContainer>
  )

  const renderFailureView = () => (
    <FailureView fetchVideoData={fetchVideoData} />
  )

  const renderSuccessView = () => (
    <div>
      <TopIconContainer darkTheme={darkTheme}>
        <SiYoutubegaming size={30} color="red" />
        <NormalHeading darkTheme={darkTheme}>Gaming</NormalHeading>
      </TopIconContainer>
      <GamingDataContainer>
        {gamingData.map(each => (
          <GamingItem key={each.id}>
            <Link to={`/videos/${each.id}`}>
              <GamingImage src={each.thumbnailUrl} alt="thumbnail" />
            </Link>
            <StyledHeading darkTheme={darkTheme}>{each.title}</StyledHeading>
            <ChannelName darkTheme={darkTheme}>
              {each.viewCount} Watching Worldwide
            </ChannelName>
          </GamingItem>
        ))}
      </GamingDataContainer>
    </div>
  )

  const renderContent = () => {
    switch (true) {
      case isLoading:
        return renderLoaderView()
      case isFailure:
        return renderFailureView()
      default:
        return renderSuccessView()
    }
  }

  return (
    <HomeBgContainer darkTheme={darkTheme}>
      <HomeContainer darkTheme={darkTheme}>
        <Header />
        <Sidebar />
        <DataContainer darkTheme={darkTheme}>{renderContent()}</DataContainer>
      </HomeContainer>
    </HomeBgContainer>
  )
}

export default Gaming
