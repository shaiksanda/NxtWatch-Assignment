import {useContext} from 'react'
import Sidebar from '../Sidebar'
import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import {
  HomeBgContainer,
  HomeContainer,
  DataContainer,
  StyledContainer,
  Content,
  NotFoundImage,
  NormalHeading,
} from './styledComponents'

const NotFound = () => {
  const {darkTheme} = useContext(NxtContext)

  return (
    <HomeBgContainer darkTheme={darkTheme}>
      <HomeContainer darkTheme={darkTheme}>
        <Header />
        <Sidebar />
        <DataContainer darkTheme={darkTheme}>
          <StyledContainer darkTheme={darkTheme}>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <NormalHeading>Page Not Found</NormalHeading>
            <Content darkTheme={darkTheme}>
              We are sorry, the page you requested could not be found.
            </Content>
          </StyledContainer>
        </DataContainer>
      </HomeContainer>
    </HomeBgContainer>
  )
}

export default NotFound
