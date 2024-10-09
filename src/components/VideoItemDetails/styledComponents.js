import styled from 'styled-components'

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
export const ProfileLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`
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
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#475569')};
  margin: 0;
`
export const Content = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.darkTheme ? 'white' : '#383838')};
`
export const StyledHeading = styled.p`
  font-size: 18px;
  color: ${props => (props.darkTheme ? 'white' : '#00306e')};
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const StyledHr = styled.hr`
  height: 4px; /* Set height */
  background-color: gray; /* Set color */
  border: none; /* Remove default border */
  margin: 10px 0; /* Optional: Add some margin */
`

export const VideoItemContainer = styled.div`
  margin-top: 80px;
`

export const SuccessMessage = styled.div`
  color: green; /* Change the color as desired */
  font-weight: bold;
  margin: 10px 0; /* Adjust the spacing */
  text-align: center; /* Center the text */
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const ViewsAndLikesContainer = styled.div`
  color: #7e858e;
  font-weight: bold;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ViewContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
`

export const ActiveButton = styled.span`
  color: #4f46e5;
`

export const TitleHeading1 = styled.h1`
  font-size: 24px;
  color: #383838;
`

export const HrLine = styled.div`
  height: 4px; /* Set height */
  background-color: gray;
`
