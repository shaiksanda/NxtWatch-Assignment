import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkTheme ? '#181818 ' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 70px;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const Container = styled.div`
  background-color: black;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`

export const DataContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px); /* Full height minus header */
  padding-top: 60px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  border-radius: 10px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-left: 20%; /* Add margin to avoid overlap */
    padding: 10px;
    overflow-y: auto;
    height: calc(100vh - 60px); /* Full height minus header */
  }
`
export const ApiDataContainer = styled.div`
  background-color: ${props => props.darkTheme};
  padding: 10px;
  width: 100%;
  border-radius: 10px;
`

export const TitleHeading = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
`

export const ChannelName = styled.p`
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#475569')};
  margin: 0;
`

export const PublishedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
`

export const SearchResultsHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.darkTheme ? 'red' : 'red')};
`

export const SearchResultsContent = styled.p`
  font-size: 18px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : 'black')};
`

export const LoaderContainer = styled.div`
  position: fixed; /* or absolute, depending on your layout */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: adds a semi-transparent background */
  z-index: 999; /* Ensure it's on top of other elements */
`

export const CrossContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GetItNowButton = styled.button`
  height: 50px;
  width: 120px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const SearchContainer = styled.div`
  border: none;
  height: 50px;
  border-radius: 8px;
  background: lavender;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 10px;
  }
`

export const InputSearch = styled.input`
  border: none;
  height: 50px;
  width: 300px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  background: lavender;
  font-weight: bold;
`

export const VideoThumbnail = styled.img`
  width: 95%;
  border-radius: 10px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    width: 370px;
  }
`

export const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const ProfileLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
`

export const ViewsCount = styled.p`
  font-size: 16px;
`

export const EachVideoContainer = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
`

export const NoSearchResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

export const NoVideos = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const RetryButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  background-color: orchid;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
`

export const NavItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const Heading = styled.h1`
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const FailureBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  margin-left:30px;
  background-color:${props => (props.darkTheme ? 'black' : 'white')}
  border-radius:10px;
  
`
export const Logo = styled.img`
  width: 120px
`
