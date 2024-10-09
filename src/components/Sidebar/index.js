import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {FiHome} from 'react-icons/fi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiVideoUploadLine} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {FaThumbsDown} from 'react-icons/fa'

import NxtContext from '../../context/NxtContext'
import {
  SidebarContainer,
  IconContainer,
  NormalHeading,
  ContactUs,
  Content,
  Logos,
  LogosContainer,
} from './styledComponents'
import './index.css'

const Sidebar = ({isOpen}) => {
  const {darkTheme} = useContext(NxtContext)
  return (
    <SidebarContainer isOpen={isOpen} darkTheme={darkTheme}>
      <div>
        <Link className="nav-item-link" to="/">
          <IconContainer darkTheme={darkTheme}>
            <FiHome size={20} color={darkTheme ? 'white' : 'black'} />
            <NormalHeading darkTheme={darkTheme}>Home</NormalHeading>
          </IconContainer>
        </Link>
        <Link to="/trending" className="nav-item-link">
          <IconContainer darkTheme={darkTheme}>
            <AiFillFire size={20} color={darkTheme ? 'white' : 'black'} />
            <NormalHeading darkTheme={darkTheme}>Trending</NormalHeading>
          </IconContainer>
        </Link>
        <Link to="/gaming" className="nav-item-link">
          <IconContainer darkTheme={darkTheme}>
            <SiYoutubegaming size={20} color={darkTheme ? 'white' : 'black'} />
            <NormalHeading darkTheme={darkTheme}>Gaming</NormalHeading>
          </IconContainer>
        </Link>
        <Link to="/saved-videos" className="nav-item-link">
          <IconContainer darkTheme={darkTheme}>
            <RiVideoUploadLine
              size={20}
              color={darkTheme ? 'white' : 'black'}
            />
            <NormalHeading darkTheme={darkTheme}>Saved Videos</NormalHeading>
          </IconContainer>
        </Link>
        <Link to="/liked-videos" className="nav-item-link">
          <IconContainer darkTheme={darkTheme}>
            <BiLike size={20} color={darkTheme ? 'white' : 'black'} />
            <NormalHeading darkTheme={darkTheme}>Liked Videos</NormalHeading>
          </IconContainer>
        </Link>
        <Link to="/disliked-videos" className="nav-item-link">
          <IconContainer darkTheme={darkTheme}>
            <FaThumbsDown size={20} color={darkTheme ? 'white' : 'black'} />
            <NormalHeading darkTheme={darkTheme}>Disliked Videos</NormalHeading>
          </IconContainer>
        </Link>
      </div>
      <div>
        <ContactUs darkTheme={darkTheme}>CONTACT US</ContactUs>
        <LogosContainer>
          <Logos
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Logos
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Logos
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </LogosContainer>
        <Content darkTheme={darkTheme}>
          Enjoy! Now to see your channels and recommendations!
        </Content>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar
