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
  font-size: 14px;
  color: ${props => (props.darkTheme ? 'white' : '#00306e')};
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props =>
    props.darkTheme ? 'white' : 'black'}; /* Color based on props */

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: ${props => (props.darkTheme ? 'black' : 'white')};
  border-radius: 8px;
  padding: 8px;
`

export const SavedVideosHeading = styled.h2`
  font-size: 24px;
  color: #00306e;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedVideosHeading1 = styled.h3`
  font-size: 10px;
  color: #00306e;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedVideoDescription = styled.p`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const SavedImage = styled.img`
  width: 150px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const SavedDescription = styled.p`
  font-size: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const NotFoundImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
