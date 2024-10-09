import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkTheme ? '#181818 ' : '#f9f9f9')};
`
export const ProfileLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`

export const HomeContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 70px;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
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
export const ChannelName = styled.p`
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#475569')};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const TopIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  padding: 10px;
  background-color: ${props => (props.darkTheme ? '#383838' : '#e2e8f0')};
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background-color: skyblue;
    border-radius: 8px;
  }
`

export const NormalHeading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 24px;
`

export const StyledHeading = styled.p`
  font-size: 18px;
  color: ${props => (props.darkTheme ? 'white' : '#00306e')};
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const TrendingImage = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`

export const EachData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ImageContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const TrendingDataContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const TrendingHeading = styled.h2`
  font-size: 20px;
  color: #424242;

  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
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
