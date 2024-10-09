import {useContext} from 'react'
import NxtContext from '../../context/NxtContext'
import {
  FailureBgContainer,
  Content,
  Heading,
  RetryButton,
  NotFoundImage,
} from './styledComponents'

const FailureView = props => {
  const {fetchVideoData} = props
  const {darkTheme} = useContext(NxtContext)
  return (
    <FailureBgContainer darkTheme={darkTheme}>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="not-found-image"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Content darkTheme={darkTheme}>
        We are having some trouble completing your request, please try again.
      </Content>
      <RetryButton onClick={fetchVideoData} type="button">
        Retry
      </RetryButton>
    </FailureBgContainer>
  )
}

export default FailureView
