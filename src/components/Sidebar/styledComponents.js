import styled from 'styled-components'

export const NormalHeading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 24px;
`
export const Content = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.darkTheme ? 'white' : '#383838')};
`
export const ContactUs = styled.p`
  font-size: 28px;
  color: ${props => (props.darkTheme ? 'white' : '#1e293b')};
  font-weight: bold;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  padding: 10px;

  &:hover {
    transform: scale(1.02);
    background-color: ${props => (props.darkTheme ? 'black' : '#d7dfe9')};
    border-radius: 8px;
  }
`
export const SidebarContainer = styled.div`
  width: 20%; /* Default width for medium devices */
  background-color: ${props => (props.darkTheme ? '#181818' : '#fff')};
  padding: 10px 20px;
  overflow-y: auto;
  height: calc(100vh - 60px); /* Full height minus header */
  position: fixed;
  top: 60px;
  left: 0;

  /* Media query for small devices */
  @media screen and (max-width: 768px) {
    display: ${props =>
      props.isOpen ? 'block' : 'none'}; /* Display based on state */
    width: 100%; /* Full width for mobile view */
    height: 100vh; /* Full height for mobile view */
    top: 0; /* Reset top for mobile */
  }
`

export const Logos = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`

export const LogosContainer = styled.div`
  display: flex;
  gap: 10px;
`
