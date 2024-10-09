import {useState, useContext} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'
import {
  LoginContainer,
  LeftContainer,
  LoginCard,
  Logo,
  FormElement,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
  LoginButton,
  ErrorMsg,
  Image,
} from './styledComponents'

const Login = () => {
  const history = useHistory()
  const {darkTheme} = useContext(NxtContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const handleFailure = error => {
    setShowError(true)
    setErrorMsg(error)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const responseData = await response.json()

    if (response.ok) {
      handleSuccess(responseData.jwt_token)
    } else {
      handleFailure(responseData.error_msg)
    }
  }

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleCheckbox = () => {
    setShowPassword(prevState => !prevState)
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <LoginContainer darkTheme={darkTheme}>
      <LeftContainer>
        <Image
          src="https://res.cloudinary.com/dq4yjeejc/image/upload/v1727266763/4957136_ym8bwt.jpg"
          alt="login imag"
        />
      </LeftContainer>

      <LoginCard>
        <FormElement onSubmit={handleSubmit}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <br />
          <Label htmlFor="username">USERNAME</Label>
          <Input
            value={username}
            onChange={handleUsername}
            placeholder="Username"
            type="text"
            id="username"
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            value={password}
            onChange={handlePassword}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
          />

          <CheckboxContainer>
            <Checkbox onChange={handleCheckbox} type="checkbox" id="checkbox" />
            <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
          </CheckboxContainer>

          <LoginButton type="submit">Login</LoginButton>
          {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </FormElement>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
