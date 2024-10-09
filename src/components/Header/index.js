import {useContext, useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {RiLightbulbLine} from 'react-icons/ri'
import {FaHamburger} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import {HiLightBulb} from 'react-icons/hi'
import Popup from 'reactjs-popup'

import NxtContext from '../../context/NxtContext'
import Sidebar from '../Sidebar'
import 'reactjs-popup/dist/index.css'
import {
  HeaderContainer,
  LogoutContainer,
  MediumContainer,
  Profile,
  PopupHeading,
  CloseButton,
  ConfirmButton,
  PopupButtons,
  Logo,
} from './styledComponents'
import './index.css'

const Header = () => {
  const history = useHistory()
  const {darkTheme, updateDarkTheme} = useContext(NxtContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  const handleLogout = close => {
    Cookies.remove('jwt_token')
    history.replace('/login') // Navigate to the login route
    close() // Close the popup
  }

  return (
    <HeaderContainer bgColor={darkTheme ? '#000000' : 'white'}>
      <div>
        <Link to="/" className="nav-item-link">
          <Logo
            src={
              darkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
        </Link>
      </div>
      <MediumContainer>
        {darkTheme ? (
          <RiLightbulbLine
            onClick={updateDarkTheme}
            size={50}
            style={{cursor: 'pointer'}}
            color="white"
          />
        ) : (
          <HiLightBulb
            onClick={updateDarkTheme}
            size={50}
            style={{cursor: 'pointer'}}
          />
        )}
        <Profile
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <FaHamburger
          onClick={handleOpen}
          size={30}
          color={darkTheme ? 'white' : 'black'}
          className="small-device-icon"
        />
        <Sidebar isOpen={isOpen} />
        <Popup
          trigger={
            <div>
              <button type="button" className="logout-button">
                Logout
              </button>
              <BiLogOut
                color={darkTheme ? 'white' : 'black'}
                size={40}
                className="small-device-icon"
              />
            </div>
          }
          contentStyle={{backgroundColor: 'transparent', border: 'none'}}
          modal
        >
          {close => (
            <div className="logout-container">
              <LogoutContainer darkTheme={darkTheme}>
                <PopupHeading>Are you sure you want to logout?</PopupHeading>
                <PopupButtons>
                  <CloseButton onClick={close}>Close</CloseButton>
                  <ConfirmButton onClick={() => handleLogout(close)}>
                    Confirm
                  </ConfirmButton>
                </PopupButtons>
              </LogoutContainer>
            </div>
          )}
        </Popup>
      </MediumContainer>
    </HeaderContainer>
  )
}

export default Header
