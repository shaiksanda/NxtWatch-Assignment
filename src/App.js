import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import LikedVideos from './components/LikedVideos'
import DislikedVideos from './components/DislikedVideos'
import NotFound from './components/NotFound'
import Sidebar from './components/Sidebar'
import NxtContext from './context/NxtContext'

import './App.css'

// Replace your code here
const App = () => {
  const [savedVideos, setSavedVideos] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)
  const [likedVideos, setLikedVideos] = useState([])
  const [dislikedVideos, setDislikedVideos] = useState([])

  const updateSavedVideos = video => {
    setSavedVideos(prevVideos => {
      const videoExists = prevVideos.some(each => each.id === video.id)

      if (!videoExists) {
        // If the video does not exist, add it to the list
        return [...prevVideos, video]
      }

      // If it already exists, return the previous state (do nothing)
      return prevVideos
    })
  }

  const updateDarkTheme = () => {
    setDarkTheme(prevState => !prevState)
  }

  const updateLikedVideos = video => {
    setLikedVideos(prevVideos => {
      const videoExists = prevVideos.some(each => each.id === video.id)
      if (!videoExists) {
        return [...prevVideos, video]
      }
      return prevVideos
    })
  }

  const updateDislikedVideos = video => {
    setDislikedVideos(prevVideos => {
      const videoExists = prevVideos.some(each => each.id === video.id)
      if (!videoExists) {
        return [...prevVideos, video]
      }
      return prevVideos
    })
  }

  return (
    <NxtContext.Provider
      value={{
        savedVideos,
        darkTheme,
        updateDarkTheme,
        updateSavedVideos,
        likedVideos,
        dislikedVideos,
        updateDislikedVideos,
        updateLikedVideos,
      }}
    >
      <div style={{width: '100%'}}>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/liked-videos" component={LikedVideos} />
          <ProtectedRoute
            exact
            path="/disliked-videos"
            component={DislikedVideos}
          />
          <ProtectedRoute exact path="/sidebar" component={Sidebar} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </NxtContext.Provider>
  )
}

export default App
