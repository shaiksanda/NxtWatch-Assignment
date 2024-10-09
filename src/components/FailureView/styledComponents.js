import styled from 'styled-components'

export const FailureBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  margin-left: 30px;
  background-color: ${props => (props.darkTheme ? 'black' : 'white')};
  border-radius: 10px;
`

export const Content = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.darkTheme ? 'white' : '#383838')};
`

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.darkTheme ? 'white' : '#383838')};
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

export const NotFoundImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
