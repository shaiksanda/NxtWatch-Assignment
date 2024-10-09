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
export const Content = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.darkTheme ? 'white' : '#383838')};
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
export const NotFoundImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const NormalHeading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 24px;
`
