import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {FaDotCircle} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import {BiLike} from 'react-icons/bi'
import {RiVideoUploadLine} from 'react-icons/ri'
import {AiOutlineDislike} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  HomeBgContainer,
  HomeContainer,
  DataContainer,
  StyledHeading,
  StyledHr,
  ChannelName,
  Content,
  ViewsAndLikesContainer,
  ViewContainer,
  SuccessMessage,
  LoaderContainer,
  ProfileLogo,
} from './styledComponents'
import './index.css'

const VideoItemDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const [videoData, setVideoData] = useState(null)
  const [isFailure, setIsFailure] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [successMessage, setSuccessMessage] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const {
    updateSavedVideos,
    updateLikedVideos,
    updateDislikedVideos,
    darkTheme,
  } = useContext(NxtContext)

  const handleSaveVideo = () => {
    if (!isSaved) {
      setIsSaved(true)
      updateSavedVideos(videoData)
      setSuccessMessage('Video saved successfully!')
    }
    // Add video to saved list
    else {
      setIsSaved(false)
      setSuccessMessage('')
    }
  }

  const handleLikeVideo = () => {
    if (!isLiked) {
      setIsLiked(true)
      setIsDisliked(false)
      updateLikedVideos(videoData)
      setSuccessMessage('Video liked successfully!')
    } else {
      setIsLiked(false) // Remove like
      setSuccessMessage('Like removed.')
    }
  }

  const handleDislikeVideo = () => {
    if (!isDisliked) {
      setIsDisliked(true)
      setIsLiked(false)
      updateDislikedVideos(videoData)
      setSuccessMessage('Video disliked successfully!')
    } else {
      setIsDisliked(false) // Remove dislike
      setSuccessMessage('Dislike removed.')
    }
  }

  useEffect(() => {
    const fetchVideoData = async () => {
      setIsLoading(true)
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://apis.ccbp.in/videos/${id}`
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
          const updatedData = {
            id: responseData.video_details.id,
            channel: responseData.video_details.channel,
            videoUrl: responseData.video_details.video_url,
            thumbnailUrl: responseData.video_details.thumbnail_url,
            description: responseData.video_details.description,
            title: responseData.video_details.title,
            publishedAt: responseData.video_details.published_at,
            viewCount: responseData.video_details.view_count,
          }
          setVideoData(updatedData)
          setIsLoading(false)

          // Check if the video is already liked, disliked, or saved
        } else {
          setIsFailure(true)
          setIsLoading(false)
        }
      } catch (error) {
        setIsFailure(true)
        setIsLoading(false)
      }
    }

    fetchVideoData()
  }, [id]) // Include dependencies here

  const renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="BallTriangle" color="green" height={80} width={80} />
    </LoaderContainer>
  )

  const publishedDate = videoData ? new Date(videoData.publishedAt) : null
  const distance = publishedDate
    ? formatDistanceToNow(publishedDate, {addSuffix: true})
    : ''

  const renderSuccessView = () => {
    if (!videoData) return null
    return (
      <DataContainer darkTheme={darkTheme}>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            style={{borderRadius: '8px', overflow: 'hidden'}}
            width="100%"
            height="100%"
            url={videoData.videoUrl}
          />
        </div>

        <StyledHeading darkTheme={darkTheme}>{videoData.title}</StyledHeading>
        <ViewsAndLikesContainer>
          <ViewContainer>
            <p>{videoData.viewCount} views</p>
            <FaDotCircle />
            <p>{distance.replace(/about |almost |over |some /g, '')}</p>
          </ViewContainer>
          <ViewContainer>
            <ViewContainer
              className={isLiked ? 'active-button' : ''}
              onClick={handleLikeVideo}
            >
              <BiLike size={20} className={isLiked ? 'saved' : ''} />
              <p className={isLiked ? 'saved' : ''}>Like</p>
            </ViewContainer>
            <ViewContainer
              className={isDisliked ? 'active-button' : ''}
              onClick={handleDislikeVideo}
            >
              <AiOutlineDislike
                className={isDisliked ? 'saved' : ''}
                size={20}
              />
              <p className={isDisliked ? 'saved' : ''}>Dislike</p>
            </ViewContainer>
            <ViewContainer
              className={isSaved ? 'active-button' : ''}
              onClick={handleSaveVideo}
            >
              <RiVideoUploadLine className={isSaved ? 'saved' : ''} size={20} />
              <p className={isSaved ? 'saved' : ''}>
                {isSaved ? 'Saved' : 'Save'}
              </p>
            </ViewContainer>
          </ViewContainer>
        </ViewsAndLikesContainer>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <StyledHr />
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <ProfileLogo
            src={videoData.channel.profile_image_url}
            alt="profile"
          />
          <div>
            <ChannelName darkTheme={darkTheme}>
              {videoData.channel.name}
            </ChannelName>
            <ChannelName darkTheme={darkTheme}>
              {videoData.channel.subscriber_count} subscribers
            </ChannelName>
          </div>
        </div>
        <Content darkTheme={darkTheme}>{videoData.description}</Content>
      </DataContainer>
    )
  }

  const renderFailureView = () => <FailureView />

  const renderVideoItemDetails = () => {
    if (isLoading) return renderLoaderView()
    if (isFailure) return renderFailureView()
    return renderSuccessView()
  }

  return (
    <HomeBgContainer darkTheme={darkTheme}>
      <HomeContainer darkTheme={darkTheme}>
        <Header />
        <Sidebar />
        {renderVideoItemDetails()}
      </HomeContainer>
    </HomeBgContainer>
  )
}

export default VideoItemDetails
