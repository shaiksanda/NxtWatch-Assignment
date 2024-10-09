import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  height: 60px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  width: 100vw;
  overflow-x: hidden;
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({darkTheme}) => (darkTheme ? '#1c1c1c' : '#f9f9f9')};
  padding: 20px;
  border-radius: 8px;
  color: ${({darkTheme}) => (darkTheme ? '#f9f9f9' : '#1c1c1c')};
  height: auto;
  width: 300px;

  @media screen and (min-width: 768px){
    width: 100%;
    height: 300px;
  }
`

export const MediumContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Profile = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    width: 50px;
    cursor: pointer;
    display: block;
  }
`

export const PopupContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: none;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 300px;
  }
`

export const PopupHeading = styled.h2`
  color: #3b82f6;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`

export const ConfirmButton = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  background-color: orangered;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const CloseButton = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  background-color: darkmagenta;
  cursor: pointer;
  outline: none;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const PopupButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`

export const SmallDeviceIcon = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export const Logo = styled.img`
  width: 100px;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
