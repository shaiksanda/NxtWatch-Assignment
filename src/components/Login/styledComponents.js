import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px; /* Adjust this based on your header */
  background-color: ${({darkTheme}) => (darkTheme ? '#1c1c1c' : '#f9f9f9')};
  color: ${({darkTheme}) => (darkTheme ? '#f9f9f9' : '#1c1c1c')};
  padding: 20px;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 60px;
  }
`

export const Image = styled.img`
width: 100%;
@media screen and (min-width: 768px){
  width:70%;
}
`

export const LoginCard = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const Logo = styled.img`
  width: 100px;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #616e7c;
  font-size: 18px;
  font-weight: bold;
`

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Input = styled.input`
  cursor: pointer;
  outline: none;
  border: none;
  background: linear-gradient(to right, skyblue, lavender);
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin: 10px 10px 10px 0;
  font-weight: bold;
  width: 100%;

  &:hover {
    background: linear-gradient(to right, lavender, skyblue);
  }
`

export const LoginButton = styled.button`
  margin: 10px 0 5px 0;
  height: 50px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(to right, skyblue, lavender);
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;

  &:hover {
    background: linear-gradient(to right, lavender, skyblue);
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 10px 10px 0;
`

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`

export const ShowPassword = styled.label`
  font-size: 20px;
  color: #1e293b;
  font-weight: bold;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 18px;
  font-weight: bold;
`

export const LeftContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
